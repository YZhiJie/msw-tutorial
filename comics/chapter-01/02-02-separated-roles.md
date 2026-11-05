# 第 2 话 · 前后端分离里的三个角色

> 前端村庄与后端大山之间，Worker 站长在驿站充当可切换的替身：后端没就绪时它替大熊回信。

**所属章节**：第 1 章「认识 MSW」 ｜ **配图**：[02.svg](./02-separated-roles.svg)（PNG 见 [../../png/02.png](../../png/02-separated-roles.png)）

## 漫画讲解

前后端分离开发中，接口往往滞后于页面。MSW 让前端基于契约独立开发，后端就绪后只改 worker 启停而非业务代码。

本教程三个角色贯穿始终：请求小邮差（应用请求）、Worker 站长（Service Worker）、服务端大熊（真实后端 / Node 拦截层）。


## 知识点

- 前端不阻塞于后端进度
- 契约先行，mock 即文档
- 开发/演示/测试三用

## 延伸阅读

- 教程章节：[认识 MSW](../../../docs/01-introduction/)
- MSW 官方文档：<https://mswjs.io/docs>
