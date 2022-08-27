import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "../stores/auth";
import Home from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/order",
      name: "order",
      component: () => import("../views/order/OrderStart.vue"),
      meta: {
        hideHeader: true,
      },
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("../views/profile/Index.vue"),
      meta: {
        requireAuth: true,
      },
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/Login.vue"),
    },
  ],
});

router.beforeEach(async (to) => {
  const authRequired = to.meta.requireAuth;
  const auth = useAuthStore();

  if (authRequired && !auth.isAuthenticated) {
    auth.returnUrl = to.fullPath;
    return "/login";
  }
});

export default router;
