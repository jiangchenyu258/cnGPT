import { createRouter, createWebHistory } from "vue-router";

const routes: any[] = [
  {
    path: "/",
    redirect: "/chat",
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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
