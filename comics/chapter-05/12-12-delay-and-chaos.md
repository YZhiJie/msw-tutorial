# 第 12 话 · 慢钟、雷暴与骰子：延迟与故障注入

> 滑块控制 100–2000ms 延迟；强制错误制造雷暴；随机错误掷骰子，考验 UI 韧性。

**所属章节**：第 5 章「响应模拟」 ｜ **配图**：[12.svg](./12-delay-and-chaos.svg)（PNG 见 [../../png/12.png](../../png/12-delay-and-chaos.png)）

## 漫画讲解

本教程的场景状态（latencyMs/errorMode/forceStatus/authEnabled）通过 /api/scenario 读写，存 localStorage，跨刷新保留。

测试矩阵建议：100ms / 300ms / 2000ms 分别检查 loading、防抖、竞态与取消。


## 知识点

- 100–2000ms 可调
- force / random 错误模式
- delay('infinite') 挂起

## 延伸阅读

- 教程章节：[响应模拟](../../../docs/05-response-mocking/)
- MSW 官方文档：<https://mswjs.io/docs>
