// ABOUTME: Express server with Vite integration
// ABOUTME: Handles API routes and serves frontend in dev/prod modes

import { createServer, type Server } from 'http';
import express from 'express';
import router from './routes/index';
import { setupVite } from './vite';

const isDev = process.env.COZE_PROJECT_ENV !== 'PROD';
const port = parseInt(process.env.PORT || '5000', 10);
const hostname = process.env.HOSTNAME || 'localhost';
const app = express();
// 使用 http.createServer 包装 Express app，以便支持 WebSocket 等协议升级
const server = createServer(app);

async function startServer(): Promise<Server> {
  // 请求日志（仅开发环境，仅记录慢请求）- 必须在最前面
  if (isDev) {
    app.use((req, res, next) => {
      const start = Date.now();
      const logRequest = () => {
        const ms = Date.now() - start;
        if (ms > 100) {
          console.log(`[Slow] ${req.method} ${req.url} - ${ms}ms`);
        }
      };
      res.on('finish', logRequest);
      res.on('close', logRequest);
      next();
    });
  }

  // 添加请求体解析
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // 集成 Vite（开发模式）或静态文件服务（生产模式）
  await setupVite(app);

  // 注册 API 路由（在 Vite 之后，确保 API 请求不被 Vite 拦截）
  app.use(router);

  // 全局错误处理
  app.use((err: Error, req: express.Request, res: express.Response) => {
    console.error('Server error:', err);
    try {
      if (typeof res.status === 'function') {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const status = 'status' in err ? (err as any).status || 500 : 500;
        res.status(status).json({
          error: err.message || 'Internal server error',
        });
      } else {
        console.error('Response object does not have status method');
      }
    } catch (e) {
      console.error('Failed to send error response:', e);
    }
  });

  server.once('error', err => {
    console.error('Server error:', err);
    process.exit(1);
  });

  server.listen(port, () => {
    console.log(`\n✨ Server running at http://${hostname}:${port}`);
    console.log(`📝 Environment: ${isDev ? 'development' : 'production'}\n`);
  });

  return server;
}

startServer().catch(err => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
