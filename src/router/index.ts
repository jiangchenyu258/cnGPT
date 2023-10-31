import { createRouter, createWebHistory } from "vue-router";
import routerConfig from "../interface/routerInterface";

const routes: routerConfig[] = [
  {
    path: "/",
    name: "index",
    component: () => import("../Index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
