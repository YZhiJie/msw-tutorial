# 第 5 话 · 三间业务窗口：http / graphql / ws

> 站长开设三种窗口，分别接待 REST、GraphQL 与 WebSocket 客人。

**所属章节**：第 3 章「核心 API」 ｜ **配图**：[05.svg](./05-namespaces.svg)（PNG 见 [../../png/05.png](../../png/05-namespaces.png)）

## 漫画讲解

http 命名空间覆盖全部 HTTP 方法；graphql 从 msw/graphql 导入并用 link 固定端点；ws 从 msw/ws 导入做事件驱动的长连接模拟。

三种窗口共享同一个 worker 启动实例，也共享同一份假数据库。


## 知识点

- http / HttpResponse 在 msw
- graphql 在 msw/graphql
- ws 在 msw/ws

## 延伸阅读

- 教程章节：[核心 API](../../../docs/03-basic-api/)
- MSW 官方文档：<https://mswjs.io/docs>
