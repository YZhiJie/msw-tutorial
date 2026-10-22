# 第 11 话 · 大熊的状态码告示牌

> 201 到 503，每块牌子都对应前端一段分支逻辑；万能端点 /api/status/:code 想试哪块挂哪块。

**所属章节**：第 5 章「响应模拟」 ｜ **配图**：[11.svg](./11-status-codes.svg)（PNG 见 [../../png/11.png](../../png/11-status-codes.png)）

## 漫画讲解

状态码是前后端契约的一部分：201 带 Location、401 带 WWW-Authenticate、429/503 带 Retry-After。

错误体统一为 { error: { code, message, details? } }，前端按 code 而非文案做分支。


## 知识点

- 覆盖 4xx/5xx 全家族
- 语义化响应头
- GET /api/status/:code 任意演练

## 延伸阅读

- 教程章节：[响应模拟](../../../docs/05-response-mocking/)
- MSW 官方文档：<https://mswjs.io/docs>
