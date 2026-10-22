# 第 1 话 · 网络边界上的站长

> 请求小邮差发出的每一封信，都先经过 Worker 站长：能自己回的信自己回，回不了的再放行进山。

**所属章节**：第 1 章「认识 MSW」 ｜ **配图**：[01.svg](./01-network-guard.svg)（PNG 见 [../../png/01.png](../../png/01-network-guard.png)）

## 漫画讲解

MSW 通过浏览器里的 Service Worker 拦截 fetch/XHR/WebSocket；应用照常发请求，Network 面板里依然能看到完整报文。

handler 能匹配就由 worker 合成响应；匹配不到时按 onUnhandledFrame 策略处理：bypass 放行、warn 警告或 error 报错。


## 知识点

- 网络层拦截，业务零侵入
- DevTools 可见请求与响应
- 未命中可 passthrough 到真实后端

## 延伸阅读

- 教程章节：[认识 MSW](../../../docs/01-introduction/)
- MSW 官方文档：<https://mswjs.io/docs>
