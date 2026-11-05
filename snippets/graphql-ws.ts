/**
 * GraphQL 查询/变更 + WebSocket 聊天室（来自《MSW 3 通关教程》第七章）
 * 依赖：msw@3、graphql（peer 依赖）
 *
 * GraphQL 与 REST 共用同一份假数据库与令牌校验：协议只是外壳，业务规则不变。
 * WebSocket 是 MSW 3 原生能力（ws.link + 事件驱动），不再需要 mock-socket。
 */
import { HttpResponse } from "msw";
import { graphql } from "msw/graphql";
import { ws } from "msw/ws";

const gql = graphql.link("*/graphql");

// —— GraphQL：按 operationName 分发，与 HTTP 方法无关 ——
export const listUsers = gql.query("ListUsers", ({ variables }) =>
  HttpResponse.json({
    data: {
      // 真实实现中按 variables.page / pageSize / q 分页查询假数据库
      users: [],
      page: variables.page ?? 1,
    },
  }),
);

export const createUser = gql.mutation(
  "CreateUser",
  async ({ request, variables }) => {
    if (!request.headers.get("authorization")) {
      // GraphQL 标准错误信封
      return HttpResponse.json({
        errors: [
          { message: "未登录", extensions: { code: "UNAUTHENTICATED" } },
        ],
      });
    }
    return HttpResponse.json({
      data: { createUser: { user: variables.input } },
    });
  },
);

// —— WebSocket：server.connect() 后双向通信 ——
// 客户端侧只有 open / message / close 事件，错误通过关闭码表达
const chat = ws.link("ws://*/ws/chat");

export const chatHandler = chat.addEventListener(
  "connection",
  ({ client, server }) => {
    server.connect();
    client.send(JSON.stringify({ type: "system", text: "欢迎来到信标驿站" }));

    client.addEventListener("message", (event) => {
      // 广播给所有在线 client（开两个标签页即可见证）；
      // 排除发送者用 chat.broadcastExcept(client, payload)
      chat.broadcast(String(event.data));
    });
  },
);
