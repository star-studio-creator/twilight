import { mount } from "svelte";
import App from "./demo/App.svelte";

const app = mount(App, {
  target: document.body,
});

export default app;
