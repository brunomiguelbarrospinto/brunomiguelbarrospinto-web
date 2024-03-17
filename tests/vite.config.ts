import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  test: {
    environment: "jsdom",
    coverage: {
      // include: ["src/**/*.{ts,tsx,vue}"],
      environment: "happy-dom",
      // globals: true,
      // all: true,
      provider: "c8", // istanbul or 'c8'
      reporter: ["text", "json", "html"],
      allowExternal: true,
    },
  },
});
