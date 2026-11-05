# 第 9 话 · 没登记的信？盖章放行

> passthrough() 让指定请求直达真实后端：mock 与真实 API 可以混用。

**所属章节**：第 4 章「请求拦截」 ｜ **配图**：[09.svg](./09-passthrough.svg)（PNG 见 [../../png/09.png](../../png/09-passthrough.png)）

## 漫画讲解

passthrough() 用于放行：已就绪的接口、静态资源、埋点、第三方 API 都可以保留真实链路。

本教程示例把 https://api.github.com/* 放行，演示 mock 与真实 API 混用。


## 知识点

- 部分 mock、部分真实
- 静态资源/第三方 API 放行
- 未命中默认 bypass

## 延伸阅读

- 教程章节：[请求拦截](../../../docs/04-request-interception/)
- MSW 官方文档：<https://mswjs.io/docs>
