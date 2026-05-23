import { createRouter, type Path, type Routes } from "sv-router";

const routes = {
  "/": () => import("@demo/pages/Index.svelte"),
  "/components": {
    "/alert": () => import("@demo/pages/components/Alert.svelte"),
    "/badge": () => import("@demo/pages/components/Badge.svelte"),
    "/button": () => import("@demo/pages/components/Button.svelte"),
    "/card": () => import("@demo/pages/components/Card.svelte"),
    "/checkbox": () => import("@demo/pages/components/Checkbox.svelte"),
    "/disclosure": () => import("@demo/pages/components/Disclosure.svelte"),
    "/field": () => import("@demo/pages/components/Field.svelte"),
    "/input": () => import("@demo/pages/components/Input.svelte"),
    "/link": () => import("@demo/pages/components/Link.svelte"),
    "/modal": () => import("@demo/pages/components/Modal.svelte"),
    "/placeholder": () => import("@demo/pages/components/Placeholder.svelte"),
    "/select": () => import("@demo/pages/components/Select.svelte"),
    "/slider": () => import("@demo/pages/components/Slider.svelte"),
    "/sticky": () => import("@demo/pages/components/Sticky.svelte"),
    "/switch": () => import("@demo/pages/components/Switch.svelte"),
    "/tabs": () => import("@demo/pages/components/Tabs.svelte"),
    "/toast": () => import("@demo/pages/components/Toast.svelte"),
  },
} satisfies Routes;

export const { p, navigate, isActive, preload, route } = createRouter(routes);

export type RouteType = Path<typeof routes>;
