/**
 * MSW 3 基础 handler 示例（来自《MSW 3 通关教程》第二章）
 * 依赖：msw@3、（GraphQL 时）graphql@17
 */
import { http, HttpResponse } from "msw";

// 通配源 "*/api/..." 保证浏览器与 Node 测试共用同一份 handler
export const handlers = [
  http.get("*/api/users", () => {
    return HttpResponse.json([
      { id: 1, name: "请求小邮差", role: "admin" },
      { id: 2, name: "Worker 站长", role: "member" },
    ]);
  }),

  http.get("*/api/users/:id", ({ params }) => {
    return HttpResponse.json({ id: params.id, name: "动态用户" });
  }),

  http.post("*/api/users", async ({ request }) => {
    const body = (await request.json()) as { name?: string };
    if (!body.name) {
      return HttpResponse.json(
        { error: { code: "VALIDATION_FAILED", message: "name 必填" } },
        { status: 422 },
      );
    }
    return HttpResponse.json({ id: 3, ...body }, { status: 201 });
  }),
];
