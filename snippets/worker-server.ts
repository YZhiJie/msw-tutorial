/**
 * MSW 3 双端启动器与混合 handler（来自《MSW 3 通关教程》第三章）
 * 依赖：msw@3
 *
 * 设计要点：同一份 handlers 数组分别交给 setupWorker（浏览器）与
 * setupServer（Node 测试），这正是「一套 mock，开发与测试共用」的技术基础。
 * 混合 HTTP 与 WS handler 时，数组类型注解用 AnyHandler[]。
 * 实际工程中按运行环境二选一引入（浏览器端走 main 入口，Node 端走测试 setup）。
 */
import { http, HttpResponse } from "msw";
import { setupWorker } from "msw/browser";
import { setupServer } from "msw/node";
import type { AnyHandler } from "msw";

export const handlers: AnyHandler[] = [
  http.get("*/api/users", () => HttpResponse.json([])),
];

// —— 浏览器端（Vite / Next / 任意 SPA 入口）——
export const worker = setupWorker(...handlers);
await worker.start({
  // 未命中的请求/帧策略：bypass 放行（默认）| warn 控制台警告 | error 报错
  onUnhandledFrame: "warn",
});

// —— Node 端（Vitest / Jest / 任意脚本）——
export const server = setupServer(...handlers);
server.listen();
