# 第 7 话 · 对暗号：路径匹配规则

> 字符串、路径模板、正则三种暗号；通配源星号让浏览器与 Node 都听得懂。

**所属章节**：第 4 章「请求拦截」 ｜ **配图**：[07.svg](./07-path-matching.svg)（PNG 见 [../../png/07.png](../../png/07-path-matching.png)）

## 漫画讲解

路径支持字符串、:param 模板（Path-to-RegExp 风格）与正则；origin 用 * 通配可同时兼容浏览器与 Node。

匹配只看路径与源，查询参数在 resolver 里用 new URL(request.url).searchParams 读取。


## 知识点

- * 通配源跨端一致
- :params 取路径参数
- 正则兜底复杂规则

## 延伸阅读

- 教程章节：[请求拦截](../../../docs/04-request-interception/)
- MSW 官方文档：<https://mswjs.io/docs>
