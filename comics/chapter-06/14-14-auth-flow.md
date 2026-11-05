# 第 14 话 · 双令牌通关文牒：登录与刷新

> access token 短期通关，refresh token 换发且一用一换；重放旧牒立即失效。

**所属章节**：第 6 章「高级特性」 ｜ **配图**：[14.svg](./14-auth-flow.svg)（PNG 见 [../../png/14.png](../../png/14-auth-flow.png)）

## 漫画讲解

登录返回 tokenPair（access/refresh/expiresIn）；业务请求带 Bearer；401 时客户端用 refresh 换新令牌并重放原请求。

refresh token 轮换 + 重放检测（旧 token 再用即 401）是真实 JWT 系统的常见策略。


## 知识点

- 双令牌 + 到期刷新
- refresh 轮换防重放
- 角色 401/403 对照

## 延伸阅读

- 教程章节：[高级特性](../../../docs/06-advanced-features/)
- MSW 官方文档：<https://mswjs.io/docs>
