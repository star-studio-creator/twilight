import { svelte } from "@sveltejs/vite-plugin-svelte";
import tailwindcss from "@tailwindcss/vite";
import dts from "unplugin-dts/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    tailwindcss(),
    svelte(),
    dts({
      include: "src/**/*",
    }),
  ],
  build: {
    lib: {
      entry: {
        button: "./src/button/index.ts",
        switch: "./src/switch/index.ts",
      },
      formats: ["es"],
    },
    rollupOptions: {
      external: ["@lucide/svelte", "clsx", "svelte", "tailwindcss"],
      output: {
        preserveModules: true,
        preserveModulesRoot: "src",
      },
    },
  },
});
