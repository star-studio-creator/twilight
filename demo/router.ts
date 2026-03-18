import { createRouter } from "sv-router";
import Badge from "./pages/components/Badge.svelte";
import Button from "./pages/components/Button.svelte";
import Checkbox from "./pages/components/Checkbox.svelte";
import Input from "./pages/components/Input.svelte";
import Switch from "./pages/components/Switch.svelte";
import Index from "./pages/Index.svelte";

export const { p, navigate, isActive, route } = createRouter({
  "/": Index,
  "/components": {
    "/badge": Badge,
    "/button": Button,
    "/checkbox": Checkbox,
    "/input": Input,
    "/switch": Switch,
  },
});
