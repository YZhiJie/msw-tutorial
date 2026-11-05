/**
 * MSW 3 请求拦截：路径参数 / 查询参数 / 请求体 / FormData / 请求头校验 / passthrough
 * （来自《MSW 3 通关教程》第四章）
 * 依赖：msw@3
 */
import { http, HttpResponse, passthrough } from "msw";

export const handlers = [
  // 路径模板：Path-to-RegExp 风格 :param
  http.get("*/api/users/:userId", ({ params }) => {
    return HttpResponse.json({ id: params.userId });
  }),

  // 查询参数：查询串不参与匹配，在 resolver 里用 URL 解析
  http.get("*/api/users", ({ request }) => {
    const url = new URL(request.url);
    const page = Number(url.searchParams.get("page") ?? 1);
    const pageSize = Number(url.searchParams.get("pageSize") ?? 20);
    const q = url.searchParams.get("q") ?? "";
    const role = url.searchParams.get("role");
    return HttpResponse.json({ page, pageSize, q, role, data: [] });
  }),

  // 请求体：json() / text() / formData()；body 流只能读一次，重复读先 clone
  http.post("*/api/posts", async ({ request }) => {
    const body = (await request.json()) as { title?: string };
    return HttpResponse.json({ id: "p-1", ...body }, { status: 201 });
  }),

  // FormData 上传：字段名约定为 file，缺字段返回 422
  // 注意：浏览器 fetch 传 FormData 时不要手动设置 Content-Type
  http.post("*/api/upload", async ({ request }) => {
    const form = await request.formData();
    const file = form.get("file");
    if (!(file instanceof File)) {
      return HttpResponse.json(
        { error: { code: "MISSING_FILE", message: "multipart 字段 file 必填" } },
        { status: 422 },
      );
    }
    return HttpResponse.json(
      {
        id: crypto.randomUUID(),
        filename: file.name,
        mediaType: file.type,
        size: file.size,
      },
      { status: 201 },
    );
  }),

  // 请求头校验：400 / 406 / 200 三分支
  http.get("*/api/require-header", ({ request }) => {
    const requestId = request.headers.get("x-request-id");
    if (!requestId) {
      return HttpResponse.json(
        { error: { code: "REQUEST_ID_REQUIRED" } },
        { status: 400 },
      );
    }
    const accept = request.headers.get("accept") ?? "";
    if (!accept.includes("application/json") && !accept.includes("*/*")) {
      return HttpResponse.json(
        { error: { code: "NOT_ACCEPTABLE" } },
        { status: 406 },
      );
    }
    return HttpResponse.json({ echoed: requestId });
  }),

  // 部分放行：放在更具体的 handler 之后，避免抢先匹配用户接口
  http.get("*/api/users/*", () => passthrough()),
];
