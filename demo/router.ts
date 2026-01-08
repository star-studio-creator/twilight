import { createRouter } from "sv-router";
import Button from "./pages/components/Button.svelte";
import Switch from "./pages/components/Switch.svelte";
import Index from "./pages/Index.svelte";

export const { p, navigate, isActive, route } = createRouter({
  "/": Index,
  "/components": {
    "/button": Button,
    "/switch": Switch,
  },
});
