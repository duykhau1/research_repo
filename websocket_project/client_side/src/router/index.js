import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import('@/views/dashboard/Index'),
    children : [
      // Dashboard
      {
        name: "Dashboard",
        path: '',
        component: () => import('@/views/dashboard/Dashboard')
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
