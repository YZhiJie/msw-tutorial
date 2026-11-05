/**
 * 应用入口：先启动 Mock Worker，再渲染应用
 * React 版本（Vue 同理，把 createRoot 换成 createApp(App).mount("#app")）
 */
import React from "react";
import { createRoot } from "react-dom/client";
import { setupWorker } from "msw/browser";
import { handlers } from "./mocks/handlers";
import { App } from "./App";

async function bootstrap(): Promise<void> {
  // 务必 await：worker activated 之前发出的请求会穿透到真实网络
  if (import.meta.env.DEV) {
    const worker = setupWorker(...handlers);
    await worker.start({
      serviceWorker: { url: "/mockServiceWorker.js" },
      // v3：onUnhandledRequest 更名为 onUnhandledFrame（HTTP + WS 统一）
      onUnhandledFrame: "warn",
    });
  }

  createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}

void bootstrap();
