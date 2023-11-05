import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ArcoResolver } from "unplugin-vue-components/resolvers";
import { vitePluginForArco } from "@arco-plugins/vite-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ArcoResolver()],
    }),
    Components({
      resolvers: [
        ArcoResolver({
          sideEffect: true,
        }),
      ],
    }),
  ],
  server: {
    host: "0.0.0.0",
    // port: 4000, //设置服务启动端口
    // open:true,    //设置服务启动时是否自动打开浏览器
    cors: true, //允许跨域
    proxy: {
      "^/api": {
        target: "http://test.xsbmxt.com/ygcn",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => {
          return path.replace("/^/api/", "");
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"), // 路径别名
    },
    extensions: [".ts"], // 使用路径别名时想要省略的后缀名，可以自己 增减
  },
});
