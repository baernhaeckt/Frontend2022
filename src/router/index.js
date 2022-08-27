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
      children: [
        {
          path: "",
          name: "SelectMenu",
          component: () => import("../views/order/OrderSelectMenu.vue"),
          meta: {
            hideHeader: true,
          }
        },
        {
          path: "configuremenu",
          name: "ConfigureMenu",
          component: () => import("../views/order/ConfigureMenu.vue"),
          meta: {
            hideHeader: true,
          }
        },
        {
          path: "payment",
          name: "Payment",
          component: () => import("../views/order/Payment.vue"),
          meta: {
          }
        },
        {
          path: "thankyou",
          name: "ThankYou",
          component: () => import("../views/order/Thankyou.vue"),
          meta: {
          }
        }
      ]
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
