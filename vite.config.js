import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy"; // 兼容不支持esm的浏览器
import { resolve } from "path";

export default defineConfig({
  root: "./",
  plugins: [
    legacy({
      targets: ["defaults", "not IE 11"]
    })
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src")
    }
  },
  build: {
    target: "es2015",
    outDir: "lib",
    appType: "custom",
    sourcemap: false,
    lib: {
      name: "jsuse",
      entry: "./src/index.ts",
      formats: ["es", "umd", "iife", "cjs", "amd"] // 编译后文件格式
    },
    minify: "terser",
    terserOptions: {
      compress: {
        "drop_console": true,
        "drop_debugger": true
      }
    }
  }
});
