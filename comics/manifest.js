// 由 build/generate.mjs 生成，请勿手改
window.MSW_COMICS_MANIFEST = {
  "series": "信标驿站 · MSW 3 漫画剧场",
  "spec": {
    "viewport": "1200x840",
    "export": "2400x1680@2x",
    "format": [
      "svg",
      "png"
    ]
  },
  "count": 16,
  "episodes": [
    {
      "episode": 1,
      "chapter": 1,
      "chapterTitle": "认识 MSW",
      "id": "01-network-guard",
      "title": "网络边界上的站长",
      "desc": "请求小邮差发出的每一封信，都先经过 Worker 站长：能自己回的信自己回，回不了的再放行进山。",
      "read": [
        "MSW 通过浏览器里的 Service Worker 拦截 fetch/XHR/WebSocket；应用照常发请求，Network 面板里依然能看到完整报文。",
        "handler 能匹配就由 worker 合成响应；匹配不到时按 onUnhandledFrame 策略处理：bypass 放行、warn 警告或 error 报错。"
      ],
      "points": [
        "网络层拦截，业务零侵入",
        "DevTools 可见请求与响应",
        "未命中可 passthrough 到真实后端"
      ],
      "doc": "/01-introduction/",
      "svg": "chapter-01/01-01-network-guard.svg",
      "md": "chapter-01/01-01-network-guard.md",
      "png": "png/01-01-network-guard.png"
    },
    {
      "episode": 2,
      "chapter": 1,
      "chapterTitle": "认识 MSW",
      "id": "02-separated-roles",
      "title": "前后端分离里的三个角色",
      "desc": "前端村庄与后端大山之间，Worker 站长在驿站充当可切换的替身：后端没就绪时它替大熊回信。",
      "read": [
        "前后端分离开发中，接口往往滞后于页面。MSW 让前端基于契约独立开发，后端就绪后只改 worker 启停而非业务代码。",
        "本教程三个角色贯穿始终：请求小邮差（应用请求）、Worker 站长（Service Worker）、服务端大熊（真实后端 / Node 拦截层）。"
      ],
      "points": [
        "前端不阻塞于后端进度",
        "契约先行，mock 即文档",
        "开发/演示/测试三用"
      ],
      "doc": "/01-introduction/",
      "svg": "chapter-01/02-02-separated-roles.svg",
      "md": "chapter-01/02-02-separated-roles.md",
      "png": "png/02-02-separated-roles.png"
    },
    {
      "episode": 3,
      "chapter": 2,
      "chapterTitle": "安装与配置",
      "id": "03-install-worker",
      "title": "请站长上任：安装与 init",
      "desc": "两条命令：装上 msw，再把官方 worker 脚本放进站点根目录，站长才能正式上岗。",
      "read": [
        "msw 是库；mockServiceWorker.js 是运行在同源下的 Service Worker 资产，由 CLI 生成，需要提交进版本库。",
        "启动要 await worker.start()：worker 激活之前发出的首屏请求会穿透到真实网络。"
      ],
      "points": [
        "pnpm add msw",
        "npx msw init public/ --save",
        "await worker.start() 后再渲染"
      ],
      "doc": "/02-installation/",
      "svg": "chapter-02/03-03-install-worker.svg",
      "md": "chapter-02/03-03-install-worker.md",
      "png": "png/03-03-install-worker.png"
    },
    {
      "episode": 4,
      "chapter": 3,
      "chapterTitle": "核心 API",
      "id": "04-worker-and-server",
      "title": "一个站长，两套编制",
      "desc": "同一份 handlers 花名册：浏览器里由 setupWorker 带队，Node 测试里由 setupServer 带队。",
      "read": [
        "setupWorker(...handlers) 用于浏览器；setupServer(...handlers) 用于 Node，二者 API 同构（use/resetHandlers/close）。",
        "混合 HTTP 与 WS handler 时，数组类型标注用 AnyHandler[]。"
      ],
      "points": [
        "msw/browser 与 msw/node 两个入口",
        "handler 单一真相源",
        "AnyHandler[] 混合协议类型"
      ],
      "doc": "/03-basic-api/",
      "svg": "chapter-03/04-04-worker-and-server.svg",
      "md": "chapter-03/04-04-worker-and-server.md",
      "png": "png/04-04-worker-and-server.png"
    },
    {
      "episode": 5,
      "chapter": 3,
      "chapterTitle": "核心 API",
      "id": "05-namespaces",
      "title": "三间业务窗口：http / graphql / ws",
      "desc": "站长开设三种窗口，分别接待 REST、GraphQL 与 WebSocket 客人。",
      "read": [
        "http 命名空间覆盖全部 HTTP 方法；graphql 从 msw/graphql 导入并用 link 固定端点；ws 从 msw/ws 导入做事件驱动的长连接模拟。",
        "三种窗口共享同一个 worker 启动实例，也共享同一份假数据库。"
      ],
      "points": [
        "http / HttpResponse 在 msw",
        "graphql 在 msw/graphql",
        "ws 在 msw/ws"
      ],
      "doc": "/03-basic-api/",
      "svg": "chapter-03/05-05-namespaces.svg",
      "md": "chapter-03/05-05-namespaces.md",
      "png": "png/05-05-namespaces.png"
    },
    {
      "episode": 6,
      "chapter": 3,
      "chapterTitle": "核心 API",
      "id": "06-worker-lifecycle",
      "title": "站长的上任仪式：生命周期",
      "desc": "installing 到 activated 再到 redundant；MSW 内置 skipWaiting，注册即接管。",
      "read": [
        "标准 Service Worker 生命周期：installing → installed(waiting) → activating → activated → redundant。",
        "start() resolve 时 worker 已激活；热更新异常时手动 update/unregister 即可。Node 端没有生命周期，listen 即时生效。"
      ],
      "points": [
        "await worker.start() 后再挂载应用",
        "skipWaiting 立即接管",
        "新版脚本重新 init"
      ],
      "doc": "/03-basic-api/lifecycle",
      "svg": "chapter-03/06-06-worker-lifecycle.svg",
      "md": "chapter-03/06-06-worker-lifecycle.md",
      "png": "png/06-06-worker-lifecycle.png"
    },
    {
      "episode": 7,
      "chapter": 4,
      "chapterTitle": "请求拦截",
      "id": "07-path-matching",
      "title": "对暗号：路径匹配规则",
      "desc": "字符串、路径模板、正则三种暗号；通配源星号让浏览器与 Node 都听得懂。",
      "read": [
        "路径支持字符串、:param 模板（Path-to-RegExp 风格）与正则；origin 用 * 通配可同时兼容浏览器与 Node。",
        "匹配只看路径与源，查询参数在 resolver 里用 new URL(request.url).searchParams 读取。"
      ],
      "points": [
        "* 通配源跨端一致",
        ":params 取路径参数",
        "正则兜底复杂规则"
      ],
      "doc": "/04-request-interception/",
      "svg": "chapter-04/07-07-path-matching.svg",
      "md": "chapter-04/07-07-path-matching.md",
      "png": "png/07-07-path-matching.png"
    },
    {
      "episode": 8,
      "chapter": 4,
      "chapterTitle": "请求拦截",
      "id": "08-read-request",
      "title": "拆信读四宝：参数/查询/头/Cookie",
      "desc": "resolver 上下文里装着请求的全部细节：params、request、cookies、requestId。",
      "read": [
        "resolver 接收 { request, params, cookies, requestId }：请求体可用 json()/text()/formData()/arrayBuffer() 解析。",
        "FormData 上传不要手动设 Content-Type，浏览器要自动带 boundary。"
      ],
      "points": [
        "params 路径参数",
        "URLSearchParams 查询串",
        "headers / cookies 鉴权信息"
      ],
      "doc": "/04-request-interception/",
      "svg": "chapter-04/08-08-read-request.svg",
      "md": "chapter-04/08-08-read-request.md",
      "png": "png/08-08-read-request.png"
    },
    {
      "episode": 9,
      "chapter": 4,
      "chapterTitle": "请求拦截",
      "id": "09-passthrough",
      "title": "没登记的信？盖章放行",
      "desc": "passthrough() 让指定请求直达真实后端：mock 与真实 API 可以混用。",
      "read": [
        "passthrough() 用于放行：已就绪的接口、静态资源、埋点、第三方 API 都可以保留真实链路。",
        "本教程示例把 https://api.github.com/* 放行，演示 mock 与真实 API 混用。"
      ],
      "points": [
        "部分 mock、部分真实",
        "静态资源/第三方 API 放行",
        "未命中默认 bypass"
      ],
      "doc": "/04-request-interception/",
      "svg": "chapter-04/09-09-passthrough.svg",
      "md": "chapter-04/09-09-passthrough.md",
      "png": "png/09-09-passthrough.png"
    },
    {
      "episode": 10,
      "chapter": 5,
      "chapterTitle": "响应模拟",
      "id": "10-response-shapes",
      "title": "回信百宝箱：HttpResponse",
      "desc": "JSON、文本、XML、二进制、空响应，甚至网络层失败，都能装在回信里。",
      "read": [
        "HttpResponse.json 最常用；new HttpResponse(body, init) 可回文本/XML/Uint8Array；204 返回 null；HttpResponse.error() 模拟断网。",
        "Content-Type、Content-Disposition、WWW-Authenticate、Retry-After 等响应头都在 init.headers 里配置。"
      ],
      "points": [
        "json/text/xml/二进制/空",
        "自定义状态码与响应头",
        "error() 模拟网络层失败"
      ],
      "doc": "/05-response-mocking/",
      "svg": "chapter-05/10-10-response-shapes.svg",
      "md": "chapter-05/10-10-response-shapes.md",
      "png": "png/10-10-response-shapes.png"
    },
    {
      "episode": 11,
      "chapter": 5,
      "chapterTitle": "响应模拟",
      "id": "11-status-codes",
      "title": "大熊的状态码告示牌",
      "desc": "201 到 503，每块牌子都对应前端一段分支逻辑；万能端点 /api/status/:code 想试哪块挂哪块。",
      "read": [
        "状态码是前后端契约的一部分：201 带 Location、401 带 WWW-Authenticate、429/503 带 Retry-After。",
        "错误体统一为 { error: { code, message, details? } }，前端按 code 而非文案做分支。"
      ],
      "points": [
        "覆盖 4xx/5xx 全家族",
        "语义化响应头",
        "GET /api/status/:code 任意演练"
      ],
      "doc": "/05-response-mocking/",
      "svg": "chapter-05/11-11-status-codes.svg",
      "md": "chapter-05/11-11-status-codes.md",
      "png": "png/11-11-status-codes.png"
    },
    {
      "episode": 12,
      "chapter": 5,
      "chapterTitle": "响应模拟",
      "id": "12-delay-and-chaos",
      "title": "慢钟、雷暴与骰子：延迟与故障注入",
      "desc": "滑块控制 100–2000ms 延迟；强制错误制造雷暴；随机错误掷骰子，考验 UI 韧性。",
      "read": [
        "本教程的场景状态（latencyMs/errorMode/forceStatus/authEnabled）通过 /api/scenario 读写，存 localStorage，跨刷新保留。",
        "测试矩阵建议：100ms / 300ms / 2000ms 分别检查 loading、防抖、竞态与取消。"
      ],
      "points": [
        "100–2000ms 可调",
        "force / random 错误模式",
        "delay('infinite') 挂起"
      ],
      "doc": "/05-response-mocking/",
      "svg": "chapter-05/12-12-delay-and-chaos.svg",
      "md": "chapter-05/12-12-delay-and-chaos.md",
      "png": "png/12-12-delay-and-chaos.png"
    },
    {
      "episode": 13,
      "chapter": 6,
      "chapterTitle": "高级特性",
      "id": "13-persistent-crud",
      "title": "会记事的驿站：假数据库 CRUD",
      "desc": "localStorage 做成假数据库，增删改查跨刷新不丢；POST 201、冲突 409、非法 422 全配齐。",
      "read": [
        "MockDb 启动时读 localStorage（key 带版本号），写操作后立即持久化；Node 测试下退化为内存种子。",
        "完整状态机：创建 201+Location、重复邮箱 409、非法输入 422、越权删除 403、自删 409。"
      ],
      "points": [
        "localStorage 持久化",
        "Faker seed 可复现",
        "/api/db/reset 一键还原"
      ],
      "doc": "/06-advanced-features/",
      "svg": "chapter-06/13-13-persistent-crud.svg",
      "md": "chapter-06/13-13-persistent-crud.md",
      "png": "png/13-13-persistent-crud.png"
    },
    {
      "episode": 14,
      "chapter": 6,
      "chapterTitle": "高级特性",
      "id": "14-auth-flow",
      "title": "双令牌通关文牒：登录与刷新",
      "desc": "access token 短期通关，refresh token 换发且一用一换；重放旧牒立即失效。",
      "read": [
        "登录返回 tokenPair（access/refresh/expiresIn）；业务请求带 Bearer；401 时客户端用 refresh 换新令牌并重放原请求。",
        "refresh token 轮换 + 重放检测（旧 token 再用即 401）是真实 JWT 系统的常见策略。"
      ],
      "points": [
        "双令牌 + 到期刷新",
        "refresh 轮换防重放",
        "角色 401/403 对照"
      ],
      "doc": "/06-advanced-features/",
      "svg": "chapter-06/14-14-auth-flow.svg",
      "md": "chapter-06/14-14-auth-flow.md",
      "png": "png/14-14-auth-flow.png"
    },
    {
      "episode": 15,
      "chapter": 7,
      "chapterTitle": "综合场景",
      "id": "15-rest-vs-graphql",
      "title": "REST 与 GraphQL 两种柜台",
      "desc": "REST 一资源一柜台；GraphQL 只有一个入口、按操作名分发，信封装 data 或 errors。",
      "read": [
        "REST 用多个语义化端点表达资源；GraphQL 用单端点 + operationName 表达操作，mock 同样按操作名注册。",
        "两种协议共用同一假数据库与鉴权逻辑 —— 协议是外壳，业务规则不变。"
      ],
      "points": [
        "REST 多端点 / GraphQL 单端点",
        "按 operationName 分发",
        "标准 data/errors 信封"
      ],
      "doc": "/07-scenarios/",
      "svg": "chapter-07/15-15-rest-vs-graphql.svg",
      "md": "chapter-07/15-15-rest-vs-graphql.md",
      "png": "png/15-15-rest-vs-graphql.png"
    },
    {
      "episode": 16,
      "chapter": 7,
      "chapterTitle": "综合场景",
      "id": "16-websocket-chat",
      "title": "驿站夜话：WebSocket 实时信台",
      "desc": "MSW 3 原生 ws：欢迎语、全员广播、5 秒心跳；close-me 回 4001，error-me 回 1011。",
      "read": [
        "connection 事件中 server.connect() 并推送欢迎语；message 广播给 server.clients；定时器推送 ping 心跳。",
        "MSW 3 客户端事件只有 open/message/close，错误语义通过关闭码表达（4001 业务、1011 内部错误）。"
      ],
      "points": [
        "欢迎/广播/心跳",
        "自定义关闭码 4001/1011",
        "ws.link 通配源匹配"
      ],
      "doc": "/07-scenarios/",
      "svg": "chapter-07/16-16-websocket-chat.svg",
      "md": "chapter-07/16-16-websocket-chat.md",
      "png": "png/16-16-websocket-chat.png"
    }
  ]
};
