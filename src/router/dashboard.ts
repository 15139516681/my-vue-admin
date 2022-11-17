import FrameView from "@/components/FrameView/index.vue";

const dashboard = [
  {
    name: "dashboard",
    path: "dashboard",
    component: FrameView,
    meta: {
      title: "统计概览",
      icon: "menu-控制台",
    },
    children: [
      {
        name: "index",
        path: "index",
        component: () => import("@/views/dashboard/index.vue"),
        meta: {
          title: "首页",
        },
      },
      {
        name: "statistics",
        path: "statistics",
        component: () => import("@/views/dashboard/statistics/index.vue"),
        meta: {
          title: "页面统计",
        },
      },
    ],
  },
];
export default dashboard;
