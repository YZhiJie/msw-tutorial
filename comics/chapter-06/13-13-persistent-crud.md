# 第 13 话 · 会记事的驿站：假数据库 CRUD

> localStorage 做成假数据库，增删改查跨刷新不丢；POST 201、冲突 409、非法 422 全配齐。

**所属章节**：第 6 章「高级特性」 ｜ **配图**：[13.svg](./13-persistent-crud.svg)（PNG 见 [../../png/13.png](../../png/13-persistent-crud.png)）

## 漫画讲解

MockDb 启动时读 localStorage（key 带版本号），写操作后立即持久化；Node 测试下退化为内存种子。

完整状态机：创建 201+Location、重复邮箱 409、非法输入 422、越权删除 403、自删 409。


## 知识点

- localStorage 持久化
- Faker seed 可复现
- /api/db/reset 一键还原

## 延伸阅读

- 教程章节：[高级特性](../../../docs/06-advanced-features/)
- MSW 官方文档：<https://mswjs.io/docs>
