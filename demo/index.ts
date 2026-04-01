import "@/index.css";
import "@/theme/default.css";

import App from "@demo/App.svelte";
import { mount } from "svelte";

const app = mount(App, {
  target: document.body,
});

export default app;
