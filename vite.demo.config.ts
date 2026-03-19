import { svelte } from "@sveltejs/vite-plugin-svelte";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  root: "demo",
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [tailwindcss(), svelte()],
});
