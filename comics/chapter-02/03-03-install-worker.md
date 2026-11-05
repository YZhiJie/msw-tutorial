# 第 3 话 · 请站长上任：安装与 init

> 两条命令：装上 msw，再把官方 worker 脚本放进站点根目录，站长才能正式上岗。

**所属章节**：第 2 章「安装与配置」 ｜ **配图**：[03.svg](./03-install-worker.svg)（PNG 见 [../../png/03.png](../../png/03-install-worker.png)）

## 漫画讲解

msw 是库；mockServiceWorker.js 是运行在同源下的 Service Worker 资产，由 CLI 生成，需要提交进版本库。

启动要 await worker.start()：worker 激活之前发出的首屏请求会穿透到真实网络。


```bash
npx msw init public/ --save
```

## 知识点

- pnpm add msw
- npx msw init public/ --save
- await worker.start() 后再渲染

## 延伸阅读

- 教程章节：[安装与配置](../../../docs/02-installation/)
- MSW 官方文档：<https://mswjs.io/docs>
