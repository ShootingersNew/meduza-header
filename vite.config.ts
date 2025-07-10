import { fileURLToPath, URL } from 'node:url'

import federation from "@originjs/vite-plugin-federation"
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { defineConfig } from 'vite'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  preview: {
    port: 5005,
  },
  build: {
    target: 'esnext',
    rollupOptions: {
      output: {
        globals: { vue: 'Vue' }
      },
      external: ['vue', 'vue-router', 'pinia'],
    },
  },
  server: {
    port: 5005,
  },
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    federation({
      name: "meduza-pet-header",
      filename: "meduzaHeader.js",
      exposes: {
        "./App": "./src/App.vue",
      },
      shared: ["vue", "vue-router", "pinia"],
      remotes: process.env.NODE_ENV === 'test' ? {} : {
        'host': 'http://localhost:5000/assets/host.js',
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      ...(process.env.NODE_ENV === 'test' && {
        'host': fileURLToPath(new URL('./src/__mocks__/host', import.meta.url))
      })
    },
  },
})
