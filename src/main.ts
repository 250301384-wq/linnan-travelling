// ===== 岭南古今地图数据 =====
interface MapLocation {
  id: string;
  name: string;
  ancientName: string;
  x: number; // 百分比位置
  y: number;
  ancientDesc: string;
  modernDesc: string;
  ancientImg: string;
  modernImg: string;
  ancientPhotos: string[];
  modernPhotos: string[];
  spots: { name: string; desc: string }[];
  food: string[];
}

const MAP_LOCATIONS: MapLocation[] = [
  {
    id: 'guangzhou',
    name: '广州',
    ancientName: '番禺',
    x: 52, y: 45,
    ancientDesc: '秦始皇三十三年（前214年）设南海郡，番禺为郡治。唐代设广州都督府，为海上丝绸之路起点，外商云集，设"蕃坊"。南越王墓见证两千余年历史。',
    modernDesc: '国家中心城市，粤港澳大湾区核心引擎。广州塔、珠江新城、白云机场、南沙自贸区，千年商都焕发新活力。',
    ancientImg: '/images/map-ancient.jpg',
    modernImg: '/images/map-modern.jpg',
    ancientPhotos: ['/images/food-ancient.jpg'],
    modernPhotos: ['/images/food-modern.jpg'],
    spots: [
      { name: '南越王墓', desc: '西汉南越国第二代王赵眜之墓，出土金缕玉衣等珍贵文物' },
      { name: '光孝寺', desc: '广州最古老的佛寺，达摩祖师初到中原之地' },
      { name: '黄埔古港', desc: '清代对外贸易重要港口，海上丝绸之路见证地' },
    ],
    food: ['肠粉', '叉烧', '虾饺', '老火汤'],
  },
  {
    id: 'foshan',
    name: '佛山',
    ancientName: '季华乡',
    x: 48, y: 48,
    ancientDesc: '唐宋时期称"季华乡"。明代铸铁业兴盛，"佛山之冶遍天下"。清代与汉口、景德镇、朱仙镇并称"四大名镇"。祖庙始建于北宋元丰年间。',
    modernDesc: '制造业重镇，家电、陶瓷、武术之乡。佛山祖庙、南风古灶、岭南天地，传统与现代交融。',
    ancientImg: '/images/map-ancient.jpg',
    modernImg: '/images/map-modern.jpg',
    ancientPhotos: [],
    modernPhotos: [],
    spots: [
      { name: '祖庙', desc: '始建于北宋元丰年间，岭南建筑艺术之集大成者' },
      { name: '南风古灶', desc: '五百余年窑火不断的古龙窑，世界罕见' },
    ],
    food: ['佛山盲公饼', '双皮奶', '柱侯鸡'],
  },
  {
    id: 'chaozhou',
    name: '潮州',
    ancientName: '潮阳',
    x: 58, y: 38,
    ancientDesc: '东晋义熙九年（413年）置郡。韩愈贬潮八月，兴学治水，教化百姓，被尊为"吾潮导师"。宋代已是瓷都，笔架山窑名扬海外。',
    modernDesc: '中国瓷都、岭头单丛茶之乡。潮州古城、广济桥、牌坊街，国家级历史文化名城。',
    ancientImg: '/images/map-ancient.jpg',
    modernImg: '/images/map-modern.jpg',
    ancientPhotos: [],
    modernPhotos: [],
    spots: [
      { name: '广济桥', desc: '中国四大古桥之一，始建于南宋乾道七年' },
      { name: '开元寺', desc: '始建于唐代开元年间，粤东地区规模最大的古刹' },
    ],
    food: ['潮州牛肉丸', '粿条', '功夫茶'],
  },
  {
    id: 'shaoguan',
    name: '韶关',
    ancientName: '曲江',
    x: 42, y: 28,
    ancientDesc: '汉武帝元鼎六年（前111年）置曲江县。唐代张九龄开凿大庾岭路，打通南北通道，"兹路既开，然后五岭以南人才出矣"。',
    modernDesc: '广东北大门，丹霞山世界自然遗产所在地。南华禅寺六祖真身，禅宗祖庭。',
    ancientImg: '/images/map-ancient.jpg',
    modernImg: '/images/map-modern.jpg',
    ancientPhotos: [],
    modernPhotos: [],
    spots: [
      { name: '南华禅寺', desc: '禅宗六祖惠能弘法道场，珍藏六祖真身舍利' },
      { name: '丹霞山', desc: '世界自然遗产，色如渥丹，灿若明霞' },
    ],
    food: ['韶关酸笋', '南华斋菜'],
  },
  {
    id: 'guilin',
    name: '桂林',
    ancientName: '始安',
    x: 28, y: 32,
    ancientDesc: '秦始皇置桂林郡，以桂树成林得名。唐代莫休符《桂林风土记》载其奇山异水。南宋范成大重修静江府城，留下《桂海虞衡志》。',
    modernDesc: '山水甲天下，国际旅游胜地。漓江、象鼻山、阳朔西街，喀斯特地貌世界级景观。',
    ancientImg: '/images/map-ancient.jpg',
    modernImg: '/images/map-modern.jpg',
    ancientPhotos: [],
    modernPhotos: [],
    spots: [
      { name: '靖江王府', desc: '明代藩王府邸，比北京故宫早建34年' },
      { name: '灵渠', desc: '秦始皇命史禄开凿，世界古代水利建筑明珠' },
    ],
    food: ['桂林米粉', '马蹄糕', '阳朔啤酒鱼'],
  },
  {
    id: 'haikou',
    name: '海口',
    ancientName: '琼州',
    x: 22, y: 65,
    ancientDesc: '汉武帝元封元年（前110年）设珠崖、儋耳二郡。苏轼贬儋州三年，"我本海南民，寄生西蜀州"，办学堂，介学风，开化海南。',
    modernDesc: '海南省会，自由贸易港核心城市。骑楼老街、五公祠、火山口地质公园。',
    ancientImg: '/images/map-ancient.jpg',
    modernImg: '/images/map-modern.jpg',
    ancientPhotos: [],
    modernPhotos: [],
    spots: [
      { name: '五公祠', desc: '纪念唐宋五位被贬海南的名臣' },
      { name: '骑楼老街', desc: '南洋风格骑楼建筑群，海口城市记忆' },
    ],
    food: ['海南鸡饭', '清补凉', '椰子鸡'],
  },
  {
    id: 'hongkong',
    name: '香港',
    ancientName: '屯门',
    x: 55, y: 50,
    ancientDesc: '唐代设屯门军镇，为广州外港。宋代已是海上贸易重要港口。明清时期属新安县管辖，维多利亚港天然良港，英国人称"东方之珠"。',
    modernDesc: '国际金融中心，东西方文化交汇之地。维多利亚港、中环、庙街，繁华与传统并存。',
    ancientImg: '/images/map-ancient.jpg',
    modernImg: '/images/map-modern.jpg',
    ancientPhotos: [],
    modernPhotos: [],
    spots: [
      { name: '大屿山大佛', desc: '天坛大佛，世界最大户外青铜坐佛' },
      { name: '黄大仙祠', desc: '香港最著名的道教庙宇，香火鼎盛' },
    ],
    food: ['丝袜奶茶', '蛋挞', '云吞面'],
  },
  {
    id: 'silkroad',
    name: '海上丝路',
    ancientName: '广州通海夷道',
    x: 62, y: 58,
    ancientDesc: '唐代贾耽《皇华四达记》载"广州通海夷道"，从广州出发，经南海、印度洋至波斯湾，全程万余里，是当时世界最长航线。',
    modernDesc: '21世纪海上丝绸之路核心区。南沙港、中欧班列，续写千年贸易新篇章。',
    ancientImg: '/images/map-ancient.jpg',
    modernImg: '/images/map-modern.jpg',
    ancientPhotos: [],
    modernPhotos: [],
    spots: [
      { name: '南海神庙', desc: '始建于隋开皇十四年，中国四大海神庙之首' },
      { name: '十三行遗址', desc: '清代对外贸易商行集中地，中西贸易窗口' },
    ],
    food: ['十三行茶点', '外贸糕点'],
  },
];

// ===== 美食数据 =====
interface FoodItem {
  id: string;
  name: string;
  category: string;
  ancientDesc: string;
  modernDesc: string;
  img: string;
  era: string;
}

const FOOD_DATA: FoodItem[] = [
  {
    id: 'changfen',
    name: '肠粉',
    category: '广府茶点',
    ancientDesc: '源于唐代泷州（今广东罗定），初以米浆蒸制，薄如蝉翼。清代广州茶楼将其发扬光大，成为"一盅两件"必备之品。',
    modernDesc: '石磨米浆搭配鲜虾、牛肉、叉烧，淋上特制酱油，滑嫩爽口，是广州早茶的灵魂。',
    img: '/images/food-ancient.jpg',
    era: '唐代起源',
  },
  {
    id: 'lizhi',
    name: '荔枝',
    category: '岭南佳果',
    ancientDesc: '"一骑红尘妃子笑，无人知是荔枝来"。唐代杨贵妃所食荔枝即来自岭南。苏轼贬惠州写下"日啖荔枝三百颗，不辞长做岭南人"。',
    modernDesc: '增城挂绿、糯米糍、桂味等名品，冷链物流让全国都能品尝新鲜荔枝，荔枝酒、荔枝干等深加工产品远销海外。',
    img: '/images/food-ancient.jpg',
    era: '汉代栽培',
  },
  {
    id: 'liangcha',
    name: '凉茶',
    category: '养生饮品',
    ancientDesc: '岭南湿热，先民以金银花、夏枯草、甘草等草药熬汤解暑。王老吉创立于清道光年间，"王老吉凉茶"闻名岭南。',
    modernDesc: '从街边凉茶铺到罐装凉茶，加多宝、王老吉行销全球。配方现代化，既保留传统功效，又适应现代口味。',
    img: '/images/food-ancient.jpg',
    era: '清代兴盛',
  },
  {
    id: 'xiajiao',
    name: '虾饺',
    category: '广府茶点',
    ancientDesc: '相传创于清代广州五凤乡，以鲜虾、猪肉、笋丁为馅，澄面皮薄如纸。早茶"四大天王"之首。',
    modernDesc: '水晶皮透亮，整只鲜虾包裹其中，蒸制后晶莹剔透。从传统茶楼到米其林餐厅，虾饺是岭南美食名片。',
    img: '/images/food-modern.jpg',
    era: '清代创制',
  },
  {
    id: 'shaoe',
    name: '烧鹅',
    category: '烧腊',
    ancientDesc: '源自南宋宫廷，后传入民间。清代广州"深井烧鹅"以荔枝木炭烤制，皮脆肉嫩，名扬四海。',
    modernDesc: '选用清远黑鬃鹅，秘制酱料腌制，果木炭烤。皮脆如玻璃，肉质鲜嫩多汁，是广式烧腊的代表。',
    img: '/images/food-modern.jpg',
    era: '宋代起源',
  },
  {
    id: 'baozaifan',
    name: '煲仔饭',
    category: '广府主食',
    ancientDesc: '以砂锅煮饭，加入腊味、排骨等。砂锅受热均匀，锅底结成金黄锅巴，香脆可口。清代广州街头已常见。',
    modernDesc: '腊味、窝蛋、黄鳝、田鸡等数十种口味。砂锅明火煲制，饭香四溢，锅巴焦脆，是广式快餐的经典。',
    img: '/images/food-ancient.jpg',
    era: '清代普及',
  },
  {
    id: 'gengzhaungnai',
    name: '姜撞奶',
    category: '广府甜品',
    ancientDesc: '相传清代沙湾一老婆婆咳嗽，以姜汁热牛奶服用，竟凝固成美味。后传入番禺沙湾，成为岭南名点。',
    modernDesc: '新鲜水牛奶撞入姜汁，瞬间凝固。口感如豆腐般嫩滑，姜香与奶香交融，暖胃又美味。',
    img: '/images/food-modern.jpg',
    era: '清代创制',
  },
  {
    id: 'niurouwan',
    name: '潮州牛肉丸',
    category: '潮汕风味',
    ancientDesc: '清代康熙年间，潮州回民以铁棒捶打牛肉制丸，弹力惊人，可打乒乓球。明末已传入潮州。',
    modernDesc: '手打牛肉丸，千锤百炼，弹牙爽口。牛肉火锅必备，配沙茶酱更是绝配，潮汕美食第一招牌。',
    img: '/images/food-modern.jpg',
    era: '清代创制',
  },
  {
    id: 'gongfucha',
    name: '潮州功夫茶',
    category: '潮汕茶道',
    ancientDesc: '始于宋代，盛于清代。翁辉东《潮州茶经》详载功夫茶二十一式。"工夫"即讲究之意，非时间之工。',
    modernDesc: '"关公巡城、韩信点兵"，凤凰单丛香气高扬。潮州人家家户户有茶具，茶道已融入日常生活。',
    img: '/images/food-ancient.jpg',
    era: '宋代起源',
  },
  {
    id: 'yuntunmian',
    name: '云吞面',
    category: '广府主食',
    ancientDesc: '源于清代广州，以全蛋面条配鲜虾云吞。面条以竹升压制，弹牙爽口。"细蓉"即小份云吞面之称。',
    modernDesc: '竹升面弹牙，鲜虾云吞饱满，大地鱼汤底清澈。从街边面档到米其林推荐，云吞面是广州人的乡愁。',
    img: '/images/food-modern.jpg',
    era: '清代创制',
  },
];

const FOOD_CATEGORIES = ['全部', '广府茶点', '岭南佳果', '养生饮品', '烧腊', '广府主食', '广府甜品', '潮汕风味', '潮汕茶道'];

// ===== 动作标签映射 =====
const ACTION_ICONS: Record<string, string> = {
  '挥毫': '✍️', '饮酒': '🍶', '品茶': '🍵', '抚琴': '🎵',
  '策杖': '🚶', '泛舟': '🛶', '捋须': '🧔', '大笑': '😄',
  '微笑': '😊', '翻古籍': '📜', '指向地图': '🗺️', '托腮思考': '🤔',
  '挥手': '👋', '惊讶': '😲', '点头': '🙂', '摇头': '😔',
};

function formatActionTag(text: string): string {
  let result = text;
  for (const [tag, icon] of Object.entries(ACTION_ICONS)) {
    result = result.replace(new RegExp(`\\[${tag}\\]`, 'g'), `<span class="action-tag">${icon}</span>`);
  }
  return result;
}

// ===== 状态 =====
let isLoading = false;
let currentMapMode: 'ancient' | 'modern' = 'ancient';
let selectedLocation: MapLocation | null = null;
let currentFoodCategory = '全部';
let currentLang: 'classical' | 'simplified' | 'traditional' = 'simplified';

// ===== DOM 元素 =====
const app = document.querySelector<HTMLDivElement>('#app')!;

// ===== 渲染主界面 =====
function renderApp(): void {
  app.innerHTML = `
    <div class="app-container">
      <!-- Sidebar -->
      <aside class="sidebar">
        <div class="avatar-wrapper">
          <div class="avatar-ring">
            <img src="/images/sushi.png" alt="苏东坡" class="avatar-img" />
          </div>
        </div>
        <div class="sidebar-title">不辞长做岭南人</div>
        <div class="sidebar-subtitle">东坡居士 · AI文化导览</div>
        
        <div class="lang-switch">
          <button class="lang-btn ${currentLang === 'classical' ? 'active' : ''}" data-lang="classical">古文</button>
          <button class="lang-btn ${currentLang === 'simplified' ? 'active' : ''}" data-lang="simplified">简体</button>
          <button class="lang-btn ${currentLang === 'traditional' ? 'active' : ''}" data-lang="traditional">繁体</button>
        </div>
        
        <div class="side-menu">
          <button class="side-menu-btn" id="btn-map">
            <span class="icon">🗺️</span>
            <span>时空地图</span>
          </button>
          <button class="side-menu-btn" id="btn-food">
            <span class="icon">🍜</span>
            <span>岭南美食</span>
          </button>
          <button class="side-menu-btn" id="btn-reset">
            <span class="icon">🔄</span>
            <span>重新开始</span>
          </button>
        </div>
        
        <div class="side-divider"></div>
        
        <div class="side-quote">
          "日啖荔枝三百颗<br>不辞长做岭南人"
        </div>
      </aside>
      
      <!-- Chat Area -->
      <main class="chat-area">
        <header class="chat-header">
          <div class="header-left">
            <div class="header-icon">粤</div>
            <div>
              <div class="header-title">不辞长做岭南人</div>
              <div class="header-subtitle">东坡居士 · AI文化导览</div>
            </div>
          </div>
          <div class="header-actions">
            <button class="header-btn" id="header-map-btn">🗺️ 时空地图</button>
            <button class="header-btn" id="header-food-btn">🍜 岭南美食</button>
          </div>
        </header>
        
        <div class="messages-wrapper" id="messages"></div>
        
        <div class="input-area">
          <div class="quick-prompts" id="quick-prompts"></div>
          <div class="input-box">
            <textarea id="chat-input" rows="1" placeholder="问我关于岭南的故事吧~"></textarea>
            <button class="send-btn" id="send-btn">➤</button>
          </div>
        </div>
      </main>
    </div>
    <div id="modals"></div>
  `;
  
  bindEvents();
  renderWelcome();
  renderQuickPrompts();
}

// ===== 渲染欢迎消息 =====
function renderWelcome(): void {
  const messages = document.getElementById('messages')!;
  const isClassical = currentLang === 'classical';
  const isTraditional = currentLang === 'traditional';
  
  let welcomeHTML = '';
  
  if (isClassical) {
    welcomeHTML = `
      <div class="welcome-card">
        <div class="welcome-title">👋 诸位安好</div>
        <div class="welcome-poem">"日啖荔枝三百颗，不辞长做岭南人"</div>
        <div class="welcome-text">
          老夫苏轼，字子瞻，号东坡居士。昔年谪居惠州、儋州，遍历岭南山水，深感此地风物之美、人情之厚。
          <br><br>
          今以AI之躯，再游故地。诸君欲知：
        </div>
        <div class="welcome-actions">
          <button class="welcome-action" data-prompt="广州古今对比">📜 广州古今</button>
          <button class="welcome-action" data-prompt="唐代广州天气如何">🌤️ 古天气</button>
          <button class="welcome-action" data-prompt="介绍一下苏东坡在岭南的故事">📖 东坡轶事</button>
          <button class="welcome-action" data-prompt="岭南有什么美食">🍜 岭南美食</button>
        </div>
      </div>
    `;
  } else if (isTraditional) {
    welcomeHTML = `
      <div class="welcome-card">
        <div class="welcome-title">👋 諸位安好</div>
        <div class="welcome-poem">"日啖荔枝三百顆，不辭長做嶺南人"</div>
        <div class="welcome-text">
          我是蘇軾，字子瞻，號東坡居士。當年貶到惠州、儋州，走遍了嶺南山水，深深愛上這片土地。
          <br><br>
          你想知道：
        </div>
        <div class="welcome-actions">
          <button class="welcome-action" data-prompt="广州古今对比">📜 廣州古今</button>
          <button class="welcome-action" data-prompt="唐代广州天气如何">🌤️ 古天氣</button>
          <button class="welcome-action" data-prompt="介绍一下苏东坡在岭南的故事">📖 東坡軼事</button>
          <button class="welcome-action" data-prompt="岭南有什么美食">🍜 嶺南美食</button>
        </div>
      </div>
    `;
  } else {
    welcomeHTML = `
      <div class="welcome-card">
        <div class="welcome-title">👋 各位安好</div>
        <div class="welcome-poem">"日啖荔枝三百颗，不辞长做岭南人"</div>
        <div class="welcome-text">
          我是苏轼，字子瞻，号东坡居士。当年被贬到惠州、儋州，走遍了岭南山水，深深爱上这片土地。
          <br><br>
          你想了解：
        </div>
        <div class="welcome-actions">
          <button class="welcome-action" data-prompt="广州古今对比">📜 广州古今</button>
          <button class="welcome-action" data-prompt="唐代广州天气如何">🌤️ 古天气</button>
          <button class="welcome-action" data-prompt="介绍一下苏东坡在岭南的故事">📖 东坡轶事</button>
          <button class="welcome-action" data-prompt="岭南有什么美食">🍜 岭南美食</button>
        </div>
      </div>
    `;
  }
  
  messages.innerHTML = welcomeHTML;
  bindWelcomeActions();
}

// ===== 渲染快捷提示 =====
function renderQuickPrompts(): void {
  const prompts = document.getElementById('quick-prompts')!;
  const isClassical = currentLang === 'classical';
  
  const promptsList = isClassical ? [
    { icon: '📜', text: '广州古今', prompt: '广州古今变迁' },
    { icon: '🌤️', text: '查天气', prompt: '唐代广州天气' },
    { icon: '🗺️', text: '海上丝路', prompt: '海上丝绸之路' },
    { icon: '🍜', text: '论美食', prompt: '岭南美食古今谈' },
    { icon: '📖', text: '南越王', prompt: '南越王墓' },
    { icon: '🏛️', text: '十三行', prompt: '广州十三行' },
  ] : [
    { icon: '📜', text: '广州古今', prompt: '广州古今变迁' },
    { icon: '🌤️', text: '查天气', prompt: '唐代广州天气' },
    { icon: '🗺️', text: '海上丝路', prompt: '海上丝绸之路' },
    { icon: '🍜', text: '美食古今', prompt: '岭南美食古今谈' },
    { icon: '📖', text: '东坡故事', prompt: '苏东坡在岭南的故事' },
    { icon: '🏛️', text: '十三行', prompt: '广州十三行' },
  ];
  
  prompts.innerHTML = promptsList.map(p => `
    <button class="quick-prompt" data-prompt="${p.prompt}">
      ${p.icon} ${p.text}
    </button>
  `).join('');
  
  prompts.querySelectorAll('.quick-prompt').forEach(btn => {
    btn.addEventListener('click', () => {
      const prompt = (btn as HTMLElement).dataset.prompt || '';
      sendMessage(prompt);
    });
  });
}

// ===== 添加消息 =====
function addMessage(content: string, isUser: boolean): void {
  const messages = document.getElementById('messages')!;
  const row = document.createElement('div');
  row.className = `msg-row ${isUser ? 'user' : 'bot'}`;
  
  const avatar = isUser
    ? 'https://api.dicebear.com/7.x/avataaars/svg?seed=user'
    : '/images/sushi.png';
  
  const formatted = formatActionTag(content);
  const time = new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' });
  
  row.innerHTML = `
    <img src="${avatar}" alt="${isUser ? '用户' : '苏东坡'}" class="msg-avatar" />
    <div class="msg-content">
      <div class="msg-bubble">${formatted}</div>
      <div class="msg-meta">${isUser ? '您' : '东坡居士'} · ${time}</div>
    </div>
  `;
  
  messages.appendChild(row);
  messages.scrollTop = messages.scrollHeight;
}

// ===== 显示加载 =====
function showTyping(): void {
  const messages = document.getElementById('messages')!;
  const id = 'typing-' + Date.now();
  const div = document.createElement('div');
  div.id = id;
  div.className = 'msg-row bot';
  div.innerHTML = `
    <img src="/images/sushi.png" alt="苏东坡" class="msg-avatar" />
    <div class="msg-content">
      <div class="typing-indicator">
        <span></span><span></span><span></span>
      </div>
    </div>
  `;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}

function hideTyping(): void {
  document.querySelectorAll('.typing-indicator').forEach(el => {
    const row = el.closest('.msg-row');
    if (row) row.remove();
  });
}

// ===== 发送消息 =====
async function sendMessage(text: string): Promise<void> {
  if (!text.trim() || isLoading) return;
  
  const input = document.getElementById('chat-input') as HTMLTextAreaElement;
  input.value = '';
  input.style.height = 'auto';
  
  isLoading = true;
  const sendBtn = document.getElementById('send-btn') as HTMLButtonElement;
  sendBtn.disabled = true;
  
  addMessage(text, true);
  showTyping();
  
  try {
    const startTime = Date.now();
    console.log(`[Client] Sending message: ${text.slice(0, 20)}...`);
    
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 60000);
    
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: text }),
      signal: controller.signal,
    });
    
    clearTimeout(timeoutId);
    
    if (!res.ok) {
      throw new Error(`HTTP error: ${res.status}`);
    }
    
    const reader = res.body?.getReader();
    if (!reader) return;
    
    const decoder = new TextDecoder();
    let fullText = '';
    let msgEl: HTMLElement | null = null;
    let firstChunkReceived = false;
    
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      
      if (!firstChunkReceived) {
        const firstChunkTime = Date.now() - startTime;
        console.log(`[Client] First chunk received in ${firstChunkTime}ms`);
        firstChunkReceived = true;
      }
      
      const chunk = decoder.decode(value, { stream: true });
      const lines = chunk.split('\n');
      
      for (const line of lines) {
        if (!line.trim() || !line.startsWith('data: ')) continue;
        const dataStr = line.slice(6);
        if (dataStr === '[DONE]') continue;
        
        try {
          const data = JSON.parse(dataStr) as { content?: string; error?: string };
          if (data.error) throw new Error(data.error);
          
          if (data.content) {
            if (!msgEl) {
              hideTyping();
              const messages = document.getElementById('messages')!;
              const row = document.createElement('div');
              row.className = 'msg-row bot';
              row.innerHTML = `
                <img src="/images/sushi.png" alt="苏东坡" class="msg-avatar" />
                <div class="msg-content">
                  <div class="msg-bubble"></div>
                  <div class="msg-meta">东坡居士</div>
                </div>
              `;
              messages.appendChild(row);
              msgEl = row.querySelector('.msg-bubble') as HTMLElement;
            }
            fullText += data.content;
            if (msgEl) msgEl.textContent = fullText;
          }
        } catch {
          // ignore parse error
        }
      }
    }
    
    const totalTime = Date.now() - startTime;
    console.log(`[Client] Message completed in ${totalTime}ms, length: ${fullText.length} chars`);
    
    if (msgEl) {
      msgEl.innerHTML = formatActionTag(fullText);
    }
    
    const messages = document.getElementById('messages')!;
    messages.scrollTop = messages.scrollHeight;
    
  } catch (e: unknown) {
    hideTyping();
    const errorMsg = e instanceof Error && e.name === 'AbortError' 
      ? '请求超时，请重试' 
      : '抱歉，老夫思绪纷乱，请再试一次。';
    addMessage(errorMsg, false);
    console.error('[Client] Error:', e);
  } finally {
    isLoading = false;
    sendBtn.disabled = false;
  }
}

// ===== 地图弹窗 =====
function openMapModal(): void {
  const modals = document.getElementById('modals')!;
  
  const markersHTML = MAP_LOCATIONS.map(loc => `
    <div class="map-marker" data-id="${loc.id}" style="left:${loc.x}%;top:${loc.y}%;">
      <div class="marker-dot" style="background:${currentMapMode === 'ancient' ? '#8B4513' : '#1E5B8C'};">${loc.name[0]}</div>
      <div class="marker-label">${loc.name}</div>
    </div>
  `).join('');
  
  modals.innerHTML = `
    <div class="map-modal-overlay" id="map-overlay">
      <div class="map-modal">
        <div class="map-header">
          <h2>🗺️ 岭南时空地图</h2>
          <button class="map-close" id="map-close">&times;</button>
        </div>
        <div class="map-body">
          <div class="map-left">
            <img src="${currentMapMode === 'ancient' ? '/images/map-ancient.jpg' : '/images/map-modern.jpg'}" 
                 class="map-bg-img" id="map-bg" alt="地图" />
            <div class="map-mode-toggle">
              <button class="map-mode-btn ${currentMapMode === 'ancient' ? 'active' : ''}" data-mode="ancient">🏛️ 古代</button>
              <button class="map-mode-btn ${currentMapMode === 'modern' ? 'active' : ''}" data-mode="modern">🏙️ 现代</button>
            </div>
            <div class="map-legend">
              <div class="map-legend-item">
                <div class="map-legend-dot" style="background:${currentMapMode === 'ancient' ? '#8B4513' : '#1E5B8C'}"></div>
                <span>${currentMapMode === 'ancient' ? '古城/古港' : '现代城市'}</span>
              </div>
            </div>
            <div class="map-markers" id="map-markers">${markersHTML}</div>
          </div>
          <div class="map-right" id="map-detail">
            ${renderMapDetail()}
          </div>
        </div>
      </div>
    </div>
  `;
  
  bindMapEvents();
}

function renderMapDetail(): string {
  if (!selectedLocation) {
    return `
      <div class="map-detail-panel">
        <div class="map-detail-empty">
          <div class="map-detail-empty-icon">🗺️</div>
          <div>点击地图上的标记点</div>
          <div style="font-size:12px;margin-top:8px;">探索岭南古今故事</div>
        </div>
      </div>
    `;
  }
  
  const loc = selectedLocation;
  const isAncient = currentMapMode === 'ancient';
  const desc = isAncient ? loc.ancientDesc : loc.modernDesc;
  const era = isAncient ? `古称：${loc.ancientName}` : '现代';
  const eraClass = isAncient ? 'ancient' : 'modern';
  const spots = loc.spots.map(s => `<li style="margin-bottom:6px;font-size:13px;"><strong>${s.name}</strong>：${s.desc}</li>`).join('');
  
  return `
    <div class="map-detail-panel">
      <div class="map-detail-card">
        <div class="map-detail-name">${loc.name}</div>
        <div class="map-detail-era ${eraClass}">${era}</div>
        <div class="map-detail-desc">${desc}</div>
        
        <div style="margin-bottom:12px;">
          <div style="font-weight:700;font-size:14px;margin-bottom:8px;color:var(--ink);">🏛️ 著名景点</div>
          <ul style="padding-left:18px;color:#4b5563;">${spots}</ul>
        </div>
        
        <div style="margin-bottom:12px;">
          <div style="font-weight:700;font-size:14px;margin-bottom:8px;color:var(--ink);">🍜 特色美食</div>
          <div style="display:flex;flex-wrap:wrap;gap:6px;">
            ${loc.food.map(f => `<span style="padding:4px 10px;background:var(--silk);border-radius:12px;font-size:12px;">${f}</span>`).join('')}
          </div>
        </div>
        
        <div class="map-detail-actions">
          <button class="map-detail-btn primary" id="map-ask-btn">💬 问东坡</button>
          <button class="map-detail-btn secondary" id="map-switch-btn">🔄 切换古今</button>
        </div>
      </div>
    </div>
  `;
}

function bindMapEvents(): void {
  document.getElementById('map-close')?.addEventListener('click', () => {
    document.getElementById('modals')!.innerHTML = '';
  });
  
  document.getElementById('map-overlay')?.addEventListener('click', (e) => {
    if (e.target === document.getElementById('map-overlay')) {
      document.getElementById('modals')!.innerHTML = '';
    }
  });
  
  document.querySelectorAll('.map-mode-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      currentMapMode = (btn as HTMLElement).dataset.mode as 'ancient' | 'modern';
      openMapModal();
    });
  });
  
  document.querySelectorAll('.map-marker').forEach(marker => {
    marker.addEventListener('click', () => {
      const id = (marker as HTMLElement).dataset.id!;
      selectedLocation = MAP_LOCATIONS.find(l => l.id === id) || null;
      document.getElementById('map-detail')!.innerHTML = renderMapDetail();
      bindMapDetailEvents();
    });
  });
}

function bindMapDetailEvents(): void {
  document.getElementById('map-switch-btn')?.addEventListener('click', () => {
    currentMapMode = currentMapMode === 'ancient' ? 'modern' : 'ancient';
    openMapModal();
  });
  
  document.getElementById('map-ask-btn')?.addEventListener('click', () => {
    if (selectedLocation) {
      const question = currentMapMode === 'ancient'
        ? `${selectedLocation.name}（${selectedLocation.ancientName}）在唐代是什么样的？`
        : `${selectedLocation.name}现在有什么好玩的？`;
      document.getElementById('modals')!.innerHTML = '';
      sendMessage(question);
    }
  });
}

// ===== 美食弹窗 =====
function openFoodModal(): void {
  const modals = document.getElementById('modals')!;
  
  const filtered = currentFoodCategory === '全部'
    ? FOOD_DATA
    : FOOD_DATA.filter(f => f.category === currentFoodCategory);
  
  modals.innerHTML = `
    <div class="food-modal-overlay" id="food-overlay">
      <div class="food-modal">
        <div class="map-header">
          <h2>🍜 岭南美食古今谈</h2>
          <button class="map-close" id="food-close">&times;</button>
        </div>
        <div class="food-body">
          <div class="food-sidebar">
            <h3>美食分类</h3>
            ${FOOD_CATEGORIES.map(c => `
              <div class="food-category ${c === currentFoodCategory ? 'active' : ''}" data-category="${c}">${c}</div>
            `).join('')}
          </div>
          <div class="food-content">
            <div class="food-grid">
              ${filtered.map(food => `
                <div class="food-card" data-id="${food.id}">
                  <img src="${food.img}" alt="${food.name}" class="food-card-img" />
                  <div class="food-card-body">
                    <div class="food-card-name">${food.name}</div>
                    <div class="food-card-era">${food.era} · ${food.category}</div>
                    <div class="food-card-desc">${food.ancientDesc.slice(0, 40)}...</div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  
  bindFoodEvents();
}

function bindFoodEvents(): void {
  document.getElementById('food-close')?.addEventListener('click', () => {
    document.getElementById('modals')!.innerHTML = '';
  });
  
  document.getElementById('food-overlay')?.addEventListener('click', (e) => {
    if (e.target === document.getElementById('food-overlay')) {
      document.getElementById('modals')!.innerHTML = '';
    }
  });
  
  document.querySelectorAll('.food-category').forEach(cat => {
    cat.addEventListener('click', () => {
      currentFoodCategory = (cat as HTMLElement).dataset.category!;
      openFoodModal();
    });
  });
  
  document.querySelectorAll('.food-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = (card as HTMLElement).dataset.id!;
      const food = FOOD_DATA.find(f => f.id === id);
      if (food) {
        document.getElementById('modals')!.innerHTML = '';
        const question = `${food.name}的古今做法有什么区别？`;
        sendMessage(question);
      }
    });
  });
}

// ===== 绑定事件 =====
function bindEvents(): void {
  // 侧边栏按钮
  document.getElementById('btn-map')?.addEventListener('click', openMapModal);
  document.getElementById('btn-food')?.addEventListener('click', openFoodModal);
  document.getElementById('header-map-btn')?.addEventListener('click', openMapModal);
  document.getElementById('header-food-btn')?.addEventListener('click', openFoodModal);
  
  document.getElementById('btn-reset')?.addEventListener('click', async () => {
    await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ reset: true }),
    });
    renderWelcome();
  });
  
  // 语言切换
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      const lang = (btn as HTMLElement).dataset.lang as 'classical' | 'simplified' | 'traditional';
      currentLang = lang;
      
      await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ languageMode: lang }),
      });
      
      document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderWelcome();
      renderQuickPrompts();
    });
  });
  
  // 输入框
  const input = document.getElementById('chat-input') as HTMLTextAreaElement;
  const sendBtn = document.getElementById('send-btn') as HTMLButtonElement;
  
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input.value);
    }
  });
  
  input.addEventListener('input', () => {
    input.style.height = 'auto';
    input.style.height = Math.min(input.scrollHeight, 120) + 'px';
  });
  
  sendBtn.addEventListener('click', () => sendMessage(input.value));
}

function bindWelcomeActions(): void {
  document.querySelectorAll('.welcome-action').forEach(btn => {
    btn.addEventListener('click', () => {
      const prompt = (btn as HTMLElement).dataset.prompt || '';
      sendMessage(prompt);
    });
  });
}

// ===== 初始化 =====
export function initApp(): void {
  renderApp();
}
