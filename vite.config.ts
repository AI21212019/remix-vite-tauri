import UnoCSS from "@unocss/vite";
import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";


export default defineConfig(async () => ({
  plugins: [
    // Inspect(),
    remix({
      basename: "/", // set this to the base path of your app
      buildDirectory: "build", // set this to the directory you want to build the app to
      future: {},
      ignoredRouteFiles: ["**/*.css"],

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
    noExternal: ["remix-utils"],
    port: 5173,
    watch: {
      // 3. tell vite to ignore watching `src-tauri`
      ignored: ["**/src-tauri/**"],
    },
  },
}));
