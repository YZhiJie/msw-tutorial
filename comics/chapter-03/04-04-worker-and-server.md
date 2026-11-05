# 第 4 话 · 一个站长，两套编制

> 同一份 handlers 花名册：浏览器里由 setupWorker 带队，Node 测试里由 setupServer 带队。

**所属章节**：第 3 章「核心 API」 ｜ **配图**：[04.svg](./04-worker-and-server.svg)（PNG 见 [../../png/04.png](../../png/04-worker-and-server.png)）

## 漫画讲解

setupWorker(...handlers) 用于浏览器；setupServer(...handlers) 用于 Node，二者 API 同构（use/resetHandlers/close）。

混合 HTTP 与 WS handler 时，数组类型标注用 AnyHandler[]。


## 知识点

- msw/browser 与 msw/node 两个入口
- handler 单一真相源
- AnyHandler[] 混合协议类型

## 延伸阅读

- 教程章节：[核心 API](../../../docs/03-basic-api/)
- MSW 官方文档：<https://mswjs.io/docs>
