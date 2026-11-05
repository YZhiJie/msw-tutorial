# 第 6 话 · 站长的上任仪式：生命周期

> installing 到 activated 再到 redundant；MSW 内置 skipWaiting，注册即接管。

**所属章节**：第 3 章「核心 API」 ｜ **配图**：[06.svg](./06-worker-lifecycle.svg)（PNG 见 [../../png/06.png](../../png/06-worker-lifecycle.png)）

## 漫画讲解

标准 Service Worker 生命周期：installing → installed(waiting) → activating → activated → redundant。

start() resolve 时 worker 已激活；热更新异常时手动 update/unregister 即可。Node 端没有生命周期，listen 即时生效。


## 知识点

- await worker.start() 后再挂载应用
- skipWaiting 立即接管
- 新版脚本重新 init

## 延伸阅读

- 教程章节：[核心 API](../../../docs/03-basic-api/lifecycle)
- MSW 官方文档：<https://mswjs.io/docs>
