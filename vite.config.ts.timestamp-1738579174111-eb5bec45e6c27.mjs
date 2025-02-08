// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import federation from "file:///E:/dev/meduza-pet-header/node_modules/@originjs/vite-plugin-federation/dist/index.mjs";
import vue from "file:///E:/dev/meduza-pet-header/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///E:/dev/meduza-pet-header/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import { defineConfig } from "file:///E:/dev/meduza-pet-header/node_modules/vite/dist/node/index.js";
import vueDevTools from "file:///E:/dev/meduza-pet-header/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
var __vite_injected_original_import_meta_url = "file:///E:/dev/meduza-pet-header/vite.config.ts";
var vite_config_default = defineConfig({
  preview: {
    port: 5005
  },
  build: {
    target: "esnext",
    rollupOptions: {
      output: {
        globals: { vue: "Vue" }
      },
      external: ["vue"]
    }
  },
  server: {
    port: 5005
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
        "./hooks/useSwitchHeaderLanguage": "./src/shared/config/i18n/useSwitchLanguage"
      },
      shared: ["vue"]
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxkZXZcXFxcbWVkdXphLXBldC1oZWFkZXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXGRldlxcXFxtZWR1emEtcGV0LWhlYWRlclxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovZGV2L21lZHV6YS1wZXQtaGVhZGVyL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXG5cbmltcG9ydCBmZWRlcmF0aW9uIGZyb20gXCJAb3JpZ2luanMvdml0ZS1wbHVnaW4tZmVkZXJhdGlvblwiXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCB2dWVKc3ggZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlLWpzeCdcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgdnVlRGV2VG9vbHMgZnJvbSAndml0ZS1wbHVnaW4tdnVlLWRldnRvb2xzJ1xuXG4vLyBodHRwczovL3ZpdGUuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHByZXZpZXc6IHtcbiAgICBwb3J0OiA1MDA1LFxuICB9LFxuICBidWlsZDoge1xuICAgIHRhcmdldDogJ2VzbmV4dCcsXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIGdsb2JhbHM6IHsgdnVlOiAnVnVlJyB9XG4gICAgICB9LFxuICAgICAgZXh0ZXJuYWw6IFsndnVlJ11cbiAgICB9LFxuICB9LFxuICBzZXJ2ZXI6IHtcbiAgICBwb3J0OiA1MDA1LFxuICB9LFxuICBwbHVnaW5zOiBbXG4gICAgdnVlKCksXG4gICAgdnVlSnN4KCksXG4gICAgdnVlRGV2VG9vbHMoKSxcbiAgICBmZWRlcmF0aW9uKHtcbiAgICAgIG5hbWU6IFwibWVkdXphLXBldC1oZWFkZXJcIixcbiAgICAgIGZpbGVuYW1lOiBcIm1lZHV6YUhlYWRlci5qc1wiLFxuICAgICAgZXhwb3Nlczoge1xuICAgICAgICBcIi4vQXBwXCI6IFwiLi9zcmMvQXBwLnZ1ZVwiLFxuICAgICAgICBcIi4vaG9va3MvdXNlU3dpdGNoSGVhZGVyTGFuZ3VhZ2VcIjogXCIuL3NyYy9zaGFyZWQvY29uZmlnL2kxOG4vdXNlU3dpdGNoTGFuZ3VhZ2VcIixcbiAgICAgIH0sXG4gICAgICBzaGFyZWQ6IFtcInZ1ZVwiXSxcbiAgICB9KSxcbiAgXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnQCc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMnLCBpbXBvcnQubWV0YS51cmwpKVxuICAgIH0sXG4gIH0sXG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFnUSxTQUFTLGVBQWUsV0FBVztBQUVuUyxPQUFPLGdCQUFnQjtBQUN2QixPQUFPLFNBQVM7QUFDaEIsT0FBTyxZQUFZO0FBQ25CLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8saUJBQWlCO0FBTnFJLElBQU0sMkNBQTJDO0FBUzlNLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUEsSUFDUixlQUFlO0FBQUEsTUFDYixRQUFRO0FBQUEsUUFDTixTQUFTLEVBQUUsS0FBSyxNQUFNO0FBQUEsTUFDeEI7QUFBQSxNQUNBLFVBQVUsQ0FBQyxLQUFLO0FBQUEsSUFDbEI7QUFBQSxFQUNGO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsSUFBSTtBQUFBLElBQ0osT0FBTztBQUFBLElBQ1AsWUFBWTtBQUFBLElBQ1osV0FBVztBQUFBLE1BQ1QsTUFBTTtBQUFBLE1BQ04sVUFBVTtBQUFBLE1BQ1YsU0FBUztBQUFBLFFBQ1AsU0FBUztBQUFBLFFBQ1QsbUNBQW1DO0FBQUEsTUFDckM7QUFBQSxNQUNBLFFBQVEsQ0FBQyxLQUFLO0FBQUEsSUFDaEIsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssY0FBYyxJQUFJLElBQUksU0FBUyx3Q0FBZSxDQUFDO0FBQUEsSUFDdEQ7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
