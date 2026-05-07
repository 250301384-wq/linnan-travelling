# 项目上下文

## 项目概述
- **项目名称**: 不辞长做岭南人 - 小粤AI数字人导览员
- **项目类型**: Vite + TypeScript + Express 全栈应用
- **核心功能**: AI驱动的岭南文化导览聊天机器人

## 技术栈

- **前端框架**: Vite 7 + TypeScript
- **后端框架**: Express 4
- **UI 样式**: Tailwind CSS 3
- **AI 集成**: coze-coding-dev-sdk (LLM流式输出)
- **端口**: 5000

## 目录结构

```
├── scripts/            # 构建与启动脚本
│   ├── build.sh        # 构建脚本
│   ├── dev.sh          # 开发环境启动脚本
│   ├── prepare.sh      # 预处理脚本
│   └── start.sh        # 生产环境启动脚本
├── server/             # 服务端逻辑
│   ├── routes/         # API 路由
│   │   ├── index.ts    # 路由入口
│   │   └── chat.ts     # 聊天API（LLM集成）
│   ├── server.ts       # Express 服务入口
│   └── vite.ts         # Vite 中间件集成
├── src/                # 前端源码
│   ├── index.css       # 全局样式（岭南文化主题）
│   ├── index.ts        # 客户端入口
│   └── main.ts         # 主逻辑（小粤数字人UI）
├── index.html          # 入口 HTML
├── package.json        # 项目依赖管理
├── tsconfig.json       # TypeScript 配置
├── vite.config.ts      # Vite 配置
└── .coze              # Coze 项目配置
```

## 包管理规范

**仅允许使用 pnpm** 作为包管理器，**严禁使用 npm 或 yarn**。
**常用命令**：
- 安装依赖：`pnpm add <package>`
- 安装开发依赖：`pnpm add -D <package>`
- 安装所有依赖：`pnpm install`
- 移除依赖：`pnpm remove <package>`

## 开发命令

```bash
# 开发环境（带热更新）
pnpm dev

# 构建生产版本
pnpm build

# 生产环境启动
pnpm start

# 类型检查
pnpm ts-check

# 代码检查
pnpm lint
```

## API 接口

### 聊天接口
- **路径**: `POST /api/chat`
- **请求体**: `{ message: string }`
- **响应**: SSE 流式输出
- **说明**: 调用 LLM 进行流式对话，使用豆包模型

### 健康检查
- **路径**: `GET /api/health`
- **响应**: `{ status: "ok", env: string, timestamp: string }`

## 小粤数字人角色设定

### 系统提示词
- 身份：生于珠江畔、长于骑楼间的岭南文化使者
- 性格：亲切如邻家姐姐，善用生活化比喻
- 语言风格：默认普通话，可切换粤语
- 知识边界：精通岭南考古、海上丝绸之路、广府/潮汕/客家文化等

### 六大核心功能
1. 古今人文对比讲解
2. 古代天气预报（动态生成）
3. 古今地图交互引导
4. 社交功能引导
5. 多语言与文化彩蛋
6. 个性化推荐

## 岭南文化主题色

```css
/* 岭南文化主题色 */
--mumian-red: #C41E3A;      /* 木棉红 */
--zhujiang-blue: #1E5B8C;   /* 珠江蓝 */
--qingzhuan: #5C5C5C;       /* 青砖色 */
--lingnan-gold: #B8860B;    /* 岭南金 */
--zhuqing: #2E8B57;         /* 竹青 */
```

## 安全注意事项

1. **LLM 调用必须在后端**: coze-coding-dev-sdk 仅允许在后端使用
2. **流式输出**: 使用 SSE 协议，前端通过 `fetch` + `body.getReader()` 处理
3. **环境变量**: API 凭据自动从环境变量加载，无需硬编码
