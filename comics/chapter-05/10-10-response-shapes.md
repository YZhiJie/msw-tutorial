# 第 10 话 · 回信百宝箱：HttpResponse

> JSON、文本、XML、二进制、空响应，甚至网络层失败，都能装在回信里。

**所属章节**：第 5 章「响应模拟」 ｜ **配图**：[10.svg](./10-response-shapes.svg)（PNG 见 [../../png/10.png](../../png/10-response-shapes.png)）

## 漫画讲解

HttpResponse.json 最常用；new HttpResponse(body, init) 可回文本/XML/Uint8Array；204 返回 null；HttpResponse.error() 模拟断网。

Content-Type、Content-Disposition、WWW-Authenticate、Retry-After 等响应头都在 init.headers 里配置。


## 知识点

- json/text/xml/二进制/空
- 自定义状态码与响应头
- error() 模拟网络层失败

## 延伸阅读

- 教程章节：[响应模拟](../../../docs/05-response-mocking/)
- MSW 官方文档：<https://mswjs.io/docs>
