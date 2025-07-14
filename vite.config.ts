import { fileURLToPath, URL } from 'node:url'

import federation from '@originjs/vite-plugin-federation'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { defineConfig,loadEnv } from 'vite'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  const isTest = mode === 'test';
  return {
    preview: {
      port: 5005,
    },
    build: {
      target: 'esnext',
      assetsDir: 'header-assets',
      rollupOptions: {
        output: {
          globals: { vue: 'Vue' },
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
        name: 'meduza-pet-header',
        filename: 'meduzaHeader.js',
        exposes: {
          './App': './src/App.vue',
        },
        shared: ['vue', 'vue-router', 'pinia'],
        remotes: isTest
          ? {}
          : {
              host: `${env.VITE_HOST_REMOTE}/assets/host.js`,
            },
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        ...(isTest && {
          host: fileURLToPath(new URL('./src/__mocks__/host', import.meta.url)),
        }),
      },
    },
  }
})
