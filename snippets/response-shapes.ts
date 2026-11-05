/**
 * MSW 3 响应模拟：状态码 / 统一错误信封 / 响应头 / 各类响应体 / 延迟
 * （来自《MSW 3 通关教程》第五章）
 * 依赖：msw@3
 */
import { delay, HttpResponse } from "msw";

// 统一错误信封：前端稳定走 body.error.code 分支，切真实后端无需改动
function fail(status: number, code: string, message: string) {
  return HttpResponse.json({ error: { code, message } }, { status });
}

export const handlers = [
  // 201 Created + Location 头（RESTful 最佳实践）
  http.post("*/api/users", async ({ request }) => {
    const user = (await request.json()) as { id: string };
    return HttpResponse.json(user, {
      status: 201,
      headers: { Location: `/api/users/${user.id}` },
    });
  }),

  // 404：统一错误信封
  http.get("*/api/not-found", () => fail(404, "NOT_FOUND", "资源不存在")),

  // 429 限流：Retry-After 告知重试间隔
  http.get("*/api/rate-limited", () =>
    HttpResponse.json(
      { error: { code: "RATE_LIMITED" } },
      { status: 429, headers: { "Retry-After": "30" } },
    ),
  ),

  // 二进制下载：Uint8Array / Blob / ArrayBuffer + Content-Disposition
  http.get("*/api/download/report", () =>
    new HttpResponse(new Uint8Array([0x89, 0x50, 0x4e, 0x47]), {
      headers: {
        "Content-Type": "image/png",
        "Content-Disposition": 'attachment; filename="report.png"',
      },
    }),
  ),

  // 延迟：精确毫秒；无参 delay() 为拟真随机分布；delay("infinite") 永不返回
  // 注意 v3 的 delay() 不再接收 { min, max } 对象
  http.get("*/api/slow", async () => {
    await delay(1200);
    return HttpResponse.json({ ok: true, took: "1200ms" });
  }),

  // 网络层失败：不是状态码，而是让 fetch 直接 reject
  http.get("*/api/network-failure", () => HttpResponse.error()),
];
