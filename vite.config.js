import { defineConfig } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import macrosPlugin from "vite-plugin-babel-macros";

export default defineConfig({
  server: {
    port: "4000",
  },
  plugins: [vue(), vueJsx(), macrosPlugin()],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "/src"),
    },
  },
});
