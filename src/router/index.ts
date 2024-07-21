import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import("../layout/Layout.vue"),
    children: [
      {
        path: "/",
        alias: "site",
        name: "site",
        component: () => import("../views/ListSite.vue"),
      },
      {
        path: "/home",
        alias: "home",
        name: "home",
        component: () => import("../views/Home.vue"),
      },
      {
        path: "/site/:id",
        alias: "detail",
        name: "detail",
        component: () => import("../views/DetailSite.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
