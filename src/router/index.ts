import { createRouter, createWebHistory } from "vue-router";
import dashboard from "./dashboard";
import Layout from "@/components/Layout/index.vue";
import Login from "@/views/login/index.vue";
import routerPermission from "@/ustils/routerPermisson/index";
export const routers = [...dashboard];

const router = createRouter({
  routes: [
    {
      name: "login",
      path: "/login",
      component: Login,
    },
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
routerPermission(router);

export default router;
