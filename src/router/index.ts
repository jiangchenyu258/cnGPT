import { isMobile } from "../assets/utils/platform";
import { createRouter, createWebHistory } from "vue-router";

const pRoutes = [
  {
    path: "/",
    redirect: "/chat",
  },
  {
    path: "/chat",
    name: "chat",
    component: () => import("../components/pc/Chat.vue"),
  },
  {
    path: "/paint",
    name: "paint",
    component: () => import("../components/pc/Paint.vue"),
  },
  {
    path: "/recharge",
    name: "recharge",
    component: () => import("../components/pc/Recharge.vue"),
  },
];

const mRoutes = [
  // 移动端布局
  {
    path: "/",
    name: "Layout",
    component: () => import("../components/mobile/layout/index.vue"),
    redirect: "/history",
    children: [
      // 聊天
      {
        path: "/chat",
        name: "Chat",
        component: () => import("../components/mobile/chat.vue"),
        meta: {
          topHeader: false,
          sideMenu: false,
        },
      },
      // 历史
      {
        path: "/history",
        name: "History",
        component: () => import("../components/mobile/history.vue"),
        meta: {
          topHeader: true,
          sideMenu: true,
        },
      },
      // 图片
      {
        path: "/image",
        name: "Image",
        component: () => import("../components/mobile/image.vue"),
        meta: {
          topHeader: true,
          sideMenu: true,
        },
      },
      // 充值
      {
        path: "/bill",
        name: "Bill",
        component: () => import("../components/mobile/bill.vue"),
        meta: {
          topHeader: true,
          sideMenu: true,
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: isMobile() ? mRoutes : pRoutes,
});

export default router;
