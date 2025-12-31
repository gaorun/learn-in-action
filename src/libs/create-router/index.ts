import type { Options } from "./types";

export function createRouter(options: Options) {
  const root = document.querySelector(options.root ?? "#app");

  const handler = async () => {
    for (const route of options.routes) {
      const pattern = new URLPattern({
        pathname: route.path,
      });

      const result = pattern.exec(location.href);

      if (result) {
        render(root, route.component);
        return;
      }

      // 匹配不到渲染 404
      render(root, "404");
    }
  };

  window.addEventListener("hashchange", handler);

  handler();
}

// 渲染组件
async function render(root: Element | null, component: unknown) {
  if (component === null || component === undefined || component === false) {
    root!.innerHTML = "";
    return;
  }

  if (typeof component === "function") {
    const content = await component();

    // 异步组件
    if (content.default) {
      render(root, content.default());
      return;
    }

    render(root, content);
    return;
  }

  root!.innerHTML = String(component);
}
