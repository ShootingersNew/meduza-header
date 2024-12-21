import { fileURLToPath, URL } from 'node:url'

import federation from "@originjs/vite-plugin-federation"
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { defineConfig } from 'vite'
// @ts-expect-error See https://github.com/gxmari007/vite-plugin-eslint/issues/79
import eslintPlugin from 'vite-plugin-eslint'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  preview: {
    port: 5005,
  },
  build: {
    target: 'esnext'
  },
  plugins: [
    eslintPlugin,
    vue(),
    vueJsx(),
    vueDevTools(),
    federation({
      name: "meduza-pet-header",
      filename: "meduzaHeader.js",
      exposes: {
        "./App": "./src/App.vue",
      },
      shared: ["vue"],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
