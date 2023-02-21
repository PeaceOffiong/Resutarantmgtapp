import { createRouter, createWebHistory } from 'vue-router'
import SignUp from '../views/SignUp.vue';
import login from "../views/Login.vue";

const isAuthenticated = () => !!localStorage.getItem("token");

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/Home.vue"),
      beforeEnter: (to, from) => {
        if (!isAuthenticated()) {
          router.push({ name: "login" });
        }
      },
    },
    {
      path: "/signup",
      name: "sign-up",
      component: SignUp,
      beforeEnter: (to, from) => {
        if (isAuthenticated()) {
          router.push({ name: "home" });
        }
      },
    },
    {
      path: "/login",
      name: "login",
      component: login,
      beforeEnter: (to, from) => {
        if (isAuthenticated()) {
          router.push({ name: "home" });
        }
      },
    },
  ],
});

export default router;
