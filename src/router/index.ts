import { createRouter, createWebHistory } from "vue-router";

const routes: any[] = [
  {
    path: "/",
    redirect: "/m/chat",
  },
  {
    path: "/chat",
    name: "chat",
    component: () => import("../components/Chat.vue"),
  },
  {
    path: "/paint",
    name: "paint",
    component: () => import("../components/Paint.vue"),
  },
  {
    path: "/recharge",
    name: "recharge",
    component: () => import("../components/Recharge.vue"),
  },
  {
    path: "/m/chat",
    name: "MobileChat",
    component: () => import("../components/mobile/chat.vue"),
  },
  {
    path: "/m/menu",
    name: "MobileMenu",
    component: () => import("../components/mobile/menu.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
