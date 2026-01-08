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
        button: "./src/button.ts",
        switch: "./src/switch.ts",
      },
      formats: ["es"],
    },
    rollupOptions: {
      external: (id) => {
        // 外部化 peerDependencies
        return (
          id === "@lucide/svelte" ||
          id === "clsx" ||
          id === "svelte" ||
          id === "tailwindcss" ||
          // 防止打包 Svelte 内部模块
          id.includes("svelte/src/internal")
        );
      },
      output: {
        preserveModules: true,
        preserveModulesRoot: "src",
        paths: (id) => {
          if (!id.includes("svelte/src/internal")) {
            return id;
          }

          // 处理 Svelte 内部模块的导入，将其指向外部安装的 Svelte 库
          const path = id.split("/svelte/src/internal/")[1];
          return `svelte/src/internal/${path}`;
        },
      },
    },
  },
});
