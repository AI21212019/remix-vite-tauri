import UnoCSS from '@unocss/vite';
// import React from '@vitejs/plugin-react'
import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

installGlobals();

export default defineConfig(async () =>({
  plugins: [
    remix({
      ssr: false,
    }),
    tsconfigPaths(),
    UnoCSS({
      transformCSS: "post",

    }),
    // React(),
  ],
  // 1. prevent vite from obscuring rust errors
  clearScreen: false,
  // 2. tauri expects a fixed port, fail if that port is not available
  server: {
    port: 5173,
    strictPort: true,
    watch: {
      // 3. tell vite to ignore watching `src-tauri`
      ignored: ["**/src-tauri/**"],
    },
  },
}));
