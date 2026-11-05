# 第 15 话 · REST 与 GraphQL 两种柜台

> REST 一资源一柜台；GraphQL 只有一个入口、按操作名分发，信封装 data 或 errors。

**所属章节**：第 7 章「综合场景」 ｜ **配图**：[15.svg](./15-rest-vs-graphql.svg)（PNG 见 [../../png/15.png](../../png/15-rest-vs-graphql.png)）

## 漫画讲解

REST 用多个语义化端点表达资源；GraphQL 用单端点 + operationName 表达操作，mock 同样按操作名注册。

两种协议共用同一假数据库与鉴权逻辑 —— 协议是外壳，业务规则不变。


## 知识点

- REST 多端点 / GraphQL 单端点
- 按 operationName 分发
- 标准 data/errors 信封

## 延伸阅读

- 教程章节：[综合场景](../../../docs/07-scenarios/)
- MSW 官方文档：<https://mswjs.io/docs>
