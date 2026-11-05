# 第 8 话 · 拆信读四宝：参数/查询/头/Cookie

> resolver 上下文里装着请求的全部细节：params、request、cookies、requestId。

**所属章节**：第 4 章「请求拦截」 ｜ **配图**：[08.svg](./08-read-request.svg)（PNG 见 [../../png/08.png](../../png/08-read-request.png)）

## 漫画讲解

resolver 接收 { request, params, cookies, requestId }：请求体可用 json()/text()/formData()/arrayBuffer() 解析。

FormData 上传不要手动设 Content-Type，浏览器要自动带 boundary。


## 知识点

- params 路径参数
- URLSearchParams 查询串
- headers / cookies 鉴权信息

## 延伸阅读

- 教程章节：[请求拦截](../../../docs/04-request-interception/)
- MSW 官方文档：<https://mswjs.io/docs>
