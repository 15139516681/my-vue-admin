import { join, resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import viteCompression from "vite-plugin-compression";

import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  if (command === "build") {
    console.log("build");
  } else {
    console.log("commond", command);
  }
  return {
    plugins: [
      vue(),

      // 自动引入组件
      AutoImport({
        imports: ["vue"],
        resolvers: [
          ElementPlusResolver(),
          IconsResolver({
            prefix: "Icon",
          }),
        ],
      }),
      Components({
        resolvers: [
          // 自动注册图标组件
          IconsResolver({
            enabledCollections: ["ep"],
          }),
          ElementPlusResolver(),
        ],
      }),
      Icons({
        autoInstall: true,
      }),
      // SVG图标处理
      createSvgIconsPlugin({
        iconDirs: [resolve(process.cwd(), "src/assets/svgs")],
        symbolId: "icon-[dir]-[name]",
      }),
      // 代码压缩
      viteCompression(),
    ],
    // 配置路径别名
    resolve: {
      alias: {
        "@": join(__dirname, "src"),
      },
    },
  };
});
