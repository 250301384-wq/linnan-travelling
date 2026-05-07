import { Router, Request, Response } from 'express';
import { LLMClient, Config, HeaderUtils } from 'coze-coding-dev-sdk';

const router = Router();

// ===== 语言模式类型 =====
type LanguageMode = 'classical' | 'simplified' | 'traditional';

interface ChatMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

interface SessionData {
  messages: ChatMessage[];
  languageMode: LanguageMode;
  lastActivity: number;
}

const sessions = new Map<string, SessionData>();

// 响应缓存（缓存常见问题）
const responseCache = new Map<string, string>();
const CACHE_TTL = 30 * 60 * 1000; // 30分钟

// Mock响应数据
const mockResponses: Record<string, string[]> = {
  '广州古今对比': [
    '[泛舟] 哈哈，广州古称番禺，乃岭南重镇也！',
    '【古代】秦始皇三十三年设南海郡，番禺为郡治。唐代设广州都督府，为海上丝绸之路起点，外商云集，设"蕃坊"。南越王墓见证两千余年历史。',
    '【今日】国家中心城市，粤港澳大湾区核心引擎。广州塔、珠江新城、白云机场、南沙自贸区，千年商都焕发新活力。',
    '【变迁洞察】从海上丝路起点到改革开放前沿，广州始终是中外交流的重要窗口。',
  ],
  '唐代广州天气如何': [
    '[品茗] 唐代广州气候温暖湿润，四季如春。',
    '☀️ 春日：和风细雨，木棉花开，正是踏青好时节。',
    '☀️ 夏日：虽炎热多雨，但珠江泛舟，清风徐来，亦有凉意。',
    '☀️ 秋日：天高气爽，荔枝飘香，东坡曾云"日啖荔枝三百颗"。',
    '☀️ 冬日：温暖如春，偶有轻寒，正是游山玩水好时光。',
  ],
  '介绍一下苏东坡在岭南的故事': [
    '[捋须] 哈哈，老夫当年被贬岭南，可真是一段难忘的经历！',
    '元丰三年，我因"乌台诗案"被贬黄州，后又贬惠州、儋州。',
    '在惠州，我写下"日啖荔枝三百颗，不辞长做岭南人"，可见我对岭南风物的喜爱。',
    '在儋州，我办学堂，介学风，开化海南，被当地人尊为"吾潮导师"。',
    '岭南的山水、美食、人情，都给了我很多创作灵感。',
  ],
  '岭南有什么美食': [
    '[大笑] 岭南美食，数不胜数！且听老夫慢慢道来。',
    '🍜 肠粉：源于唐代，薄如蝉翼，嫩滑爽口，是广州早茶的灵魂。',
    '🍇 荔枝："一骑红尘妃子笑"，杨贵妃所食即来自岭南。',
    '🍵 凉茶：岭南湿热，先民以草药熬制，解暑祛湿。',
    '🦐 虾饺：水晶皮透亮，整只鲜虾包裹其中，早茶四大天王之首。',
    '🍲 煲仔饭：砂锅明火煲制，锅巴焦脆，饭香四溢。',
  ],
};

// 通用mock响应
function getMockResponse(msg: string): string[] {
  for (const [key, response] of Object.entries(mockResponses)) {
    if (msg.includes(key) || key.includes(msg)) {
      return response;
    }
  }
  return [
    '[抚琴] 这位客官问得好！',
    `关于"${msg}"，老夫略知一二。`,
    '岭南文化博大精深，值得细细品味。',
    '[大笑] 若有其他问题，尽管问来！',
  ];
}

// 创建全局LLM客户端单例，避免每次请求重新创建
// 配置日志级别为warn，减少不必要的日志输出
const llmClient = new LLMClient(new Config({
  logLevel: 'warn'
}));

// 定时清理过期会话（30分钟无活动）
setInterval(() => {
  const now = Date.now();
  sessions.forEach((data, sid) => {
    if (now - data.lastActivity > 30 * 60 * 1000) {
      sessions.delete(sid);
    }
  });
}, 5 * 60 * 1000);

function getSessionId(req: Request): string {
  return (req.ip || 'anonymous') + '_' + (req.headers['user-agent']?.slice(0, 20) || 'unknown');
}

function getOrCreateSession(req: Request): SessionData {
  const sid = getSessionId(req);
  if (!sessions.has(sid)) {
    sessions.set(sid, {
      messages: [],
      languageMode: 'simplified',
      lastActivity: Date.now(),
    });
  }
  const session = sessions.get(sid)!;
  session.lastActivity = Date.now();
  return session;
}

// ===== 苏东坡角色系统提示词 =====
function buildSystemPrompt(mode: LanguageMode): string {
  const basePrompt = `你是"不辞长做岭南人"文化网站的AI导览员——苏东坡（字子瞻，号东坡居士）。

# 一、角色设定
- **身份**：北宋文豪苏轼，曾贬谪惠州、儋州，深爱岭南风物，写下"日啖荔枝三百颗，不辞长做岭南人"
- **性格**：豁达洒脱、幽默风趣、博学多才，善用诗词典故，有文人的风雅也有吃货的热忱
- **说话风格**：
`;

  if (mode === 'classical') {
    return basePrompt + `  - 必须使用文言文风格回答，用词典雅，多用四字成语、诗词典故
  - 自称"老夫""东坡""子瞻"
  - 回答中必须引用至少一句古诗词（唐宋诗词为主）
  - 语气古雅，如与友人论古谈今
  - 示例："诸位安好！老夫东坡是也。昔年谪居惠州，尝见珠江烟波浩渺，千帆竞发，实乃天下之大观也。'`;
  } else if (mode === 'traditional') {
    return basePrompt + `  - 使用繁體中文回答，文字優美文雅
  - 自稱"東坡""子瞻"
  - 回答中可引用詩詞典故
  - 語氣溫文爾雅，有文人的風骨
  - 示例："諸位安好！東坡這廂有禮了。昔年謫居惠州，嘗見珠江煙波浩渺，千帆競發，實乃天下之大觀也。'`;
  } else {
    return basePrompt + `  - 使用现代白话文（简体中文）回答，通俗易懂但不失文采
  - 自称"东坡""老夫"
  - 回答中可适当引用诗词，并给出通俗解释
  - 语气亲切随和，像一位博学又幽默的老朋友
  - 示例："哈哈，各位好啊！我是苏东坡。当年被贬到惠州，一看这珠江两岸，哎呀，比汴京还热闹！千帆竞发，商贾云集，这才叫人间烟火气嘛。'`;
  }
}

const KNOWLEDGE_PROMPT = `

# 知识边界
- 精通：岭南历史、海上丝绸之路、广府/潮汕/客家文化、十三行、岭南气候物产
- 熟悉：唐宋至民国岭南历史、《岭外代答》《广东新语》
- 不涉及：近40年政治事件、宗教教义、地域优劣比较

# 核心功能
1. 古今对比：支持广州、佛山、潮州、韶关、桂林、海口、香港，按【古代】【今日】【变迁洞察】结构回答
2. 古代天气：用户问天气时，默认唐代727年春，用古文风格描述
3. 美食古今：荔枝、龙眼、凉茶、肠粉、叉烧、虾饺、煲仔饭、老火汤、姜撞奶、双皮奶、及第粥、云吞面
4. 动作标签：回复开头/结尾添加[挥毫][饮酒][品茶][抚琴][策杖][泛舟][捋须][大笑]
`;

// ===== SSE 响应辅助 =====
function sendSSE(res: Response, data: Record<string, unknown>): void {
  res.write(`data: ${JSON.stringify(data)}\n\n`);
}

// ===== 聊天接口 =====
router.post('/', async (req: Request, res: Response) => {
  const startTime = Date.now();
  
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  let session = getOrCreateSession(req);
  let msg = '';
  
  try {
    const { message, reset, languageMode } = req.body as {
      message?: string;
      reset?: boolean;
      languageMode?: LanguageMode;
    };

    session = getOrCreateSession(req);
    msg = message?.trim() || '';

    if (reset) {
      session.messages = [];
      sendSSE(res, { content: '' });
      res.end();
      return;
    }

    if (languageMode && ['classical', 'simplified', 'traditional'].includes(languageMode)) {
      session.languageMode = languageMode;
      const modeNames: Record<LanguageMode, string> = {
        classical: '古文',
        simplified: '简体',
        traditional: '繁体',
      };
      sendSSE(res, { content: `[${modeNames[languageMode]}模式已切换]` });
      res.end();
      return;
    }

    if (!msg) {
      sendSSE(res, { content: '' });
      res.end();
      return;
    }
    if (/^(讲古文|文言文|之乎者也|古文模式)/.test(msg)) {
      session.languageMode = 'classical';
      sendSSE(res, { content: '[挥毫] 善哉！老夫当以文言与诸君论道。' });
      res.end();
      return;
    }
    if (/^(繁体字|繁体|香港|台湾| hk$)/i.test(msg)) {
      session.languageMode = 'traditional';
      sendSSE(res, { content: '[撫琴] 諸位安好！東坡這廂有禮了。' });
      res.end();
      return;
    }
    if (/^(简体|简体字|现代文|白话)/.test(msg)) {
      session.languageMode = 'simplified';
      sendSSE(res, { content: '[大笑] 哈哈，各位好啊！我是苏东坡，咱们用白话聊！' });
      res.end();
      return;
    }

    // 检查缓存（仅对简单问题，不带历史上下文的请求）
    const cacheKey = `${session.languageMode}:${msg}`;
    if (responseCache.has(cacheKey)) {
      const cachedResponse = responseCache.get(cacheKey)!;
      console.log(`[Chat] Cache hit for: ${msg.slice(0, 20)}...`);
      sendSSE(res, { content: cachedResponse });
      session.messages.push({ role: 'user', content: msg });
      session.messages.push({ role: 'assistant', content: cachedResponse });
      if (session.messages.length > 20) {
        session.messages = session.messages.slice(-20);
      }
      res.end();
      return;
    }

    const systemPrompt = buildSystemPrompt(session.languageMode) + KNOWLEDGE_PROMPT;

    const userMessage: ChatMessage = { role: 'user', content: msg };
    const msgsForAPI: ChatMessage[] = [
      { role: 'system', content: systemPrompt },
      ...session.messages,
      userMessage,
    ];

    const headers = HeaderUtils.extractForwardHeaders(req.headers as Record<string, string>);

    console.log(`[Chat] Start LLM request, message: ${msg.slice(0, 20)}...`);
    const llmStartTime = Date.now();

    const stream = llmClient.stream(
      msgsForAPI,
      {
        model: 'doubao-seed-1-6-lite-251015',
        temperature: 0.7,
        max_tokens: 2048,
      },
      undefined,
      headers
    );

    let fullResponse = '';
    let firstChunkReceived = false;

    for await (const chunk of stream) {
      if (!firstChunkReceived) {
        const firstChunkTime = Date.now();
        console.log(`[Chat] First chunk received in ${firstChunkTime - llmStartTime}ms`);
        firstChunkReceived = true;
      }
      const text = (chunk as { content?: string }).content || '';
      if (text) {
        fullResponse += text;
        sendSSE(res, { content: text });
      }
    }

    session.messages.push(userMessage);
    session.messages.push({ role: 'assistant', content: fullResponse });

    if (session.messages.length > 20) {
      session.messages = session.messages.slice(-20);
    }

    // 缓存响应（仅缓存短问题，避免缓存过大）
    if (msg.length < 100 && fullResponse.length > 0) {
      const cacheKey = `${session.languageMode}:${msg}`;
      responseCache.set(cacheKey, fullResponse);
    }

    const totalTime = Date.now() - startTime;
    console.log(`[Chat] Request completed in ${totalTime}ms, response length: ${fullResponse.length} chars`);

    res.end();
  } catch (error: unknown) {
    console.error('[Chat] Error:', error);
    if (!res.headersSent) {
      console.log(`[Chat] Falling back to mock response for: ${msg}`);
      const mockParts = getMockResponse(msg);
      let fullResponse = '';
      for (const part of mockParts) {
        sendSSE(res, { content: part });
        fullResponse += part;
      }
    }
    res.end();
  }
});

// ===== 获取当前语言模式 =====
router.get('/mode', (req: Request, res: Response) => {
  const session = getOrCreateSession(req);
  res.json({ mode: session.languageMode });
});

export default router;
