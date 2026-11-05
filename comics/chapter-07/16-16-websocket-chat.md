# 第 16 话 · 驿站夜话：WebSocket 实时信台

> MSW 3 原生 ws：欢迎语、全员广播、5 秒心跳；close-me 回 4001，error-me 回 1011。

**所属章节**：第 7 章「综合场景」 ｜ **配图**：[16.svg](./16-websocket-chat.svg)（PNG 见 [../../png/16.png](../../png/16-websocket-chat.png)）

## 漫画讲解

connection 事件中 server.connect() 并推送欢迎语；message 广播给 server.clients；定时器推送 ping 心跳。

MSW 3 客户端事件只有 open/message/close，错误语义通过关闭码表达（4001 业务、1011 内部错误）。


## 知识点

- 欢迎/广播/心跳
- 自定义关闭码 4001/1011
- ws.link 通配源匹配

## 延伸阅读

- 教程章节：[综合场景](../../../docs/07-scenarios/)
- MSW 官方文档：<https://mswjs.io/docs>
