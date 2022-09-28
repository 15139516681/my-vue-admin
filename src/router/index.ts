import { createRouter, createWebHistory } from "vue-router";
import dashboard from "./dashboard";
import Layout from "@/components/Layout/index.vue";
export const routers = [...dashboard];

const router = createRouter({
  routes: [
    {
      name: "index",
      path: "/",
      redirect: "/dashboard/index",
      component: Layout,
      children: [...routers],
    },
  ],
  history: createWebHistory(),
});
export default router;
