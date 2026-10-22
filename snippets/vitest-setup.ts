/**
 * Vitest 全局 setup：Node 端复用浏览器同款 handler
 * 配套：import { setupServer } from "msw/node"
 */
import { setupServer } from "msw/node";
import { afterAll, afterEach, beforeAll } from "vitest";
import { handlers } from "../src/mocks/handlers";

const server = setupServer(...handlers);

beforeAll(() => {
  // 未声明的请求一律报错，防止测试偷偷依赖真实网络
  server.listen({ onUnhandledFrame: "error" });
});

afterEach(() => {
  // 移除用例内 server.use() 追加的临时 handler，保证用例隔离
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

export { server };
