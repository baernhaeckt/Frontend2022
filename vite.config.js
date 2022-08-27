import { fileURLToPath, URL } from "node:url";
import svgLoader from 'vite-svg-loader'

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), svgLoader()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "$icons": fileURLToPath(new URL("./src/assets/icons", import.meta.url)),
    },
  },
  server: {
    port: 8080
  }
});
