import { createRouter, createWebHistory } from 'vue-router'
import SignUp from '../views/SignUp.vue';
import { useRouter } from 'vue-router';
import login from "../views/Login.vue";

const isAuthenticated = () => !!localStorage.getItem("token");

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/Home.vue"),
    },
    {
      path: "/Restaurants",
      name: "Restaurants",
      component: () => import("@/views/Restaurants.vue"),
      beforeEnter: (to, from) => {
        if (!isAuthenticated()) {
          router.push({ name: "sign-up" });
        }
      },
    },
    {
      path: "/signup",
      name: "sign-up",
      component: SignUp,
      beforeEnter: (to, from) => {
        if (isAuthenticated()) {
          router.push({ name: "Restaurants" });
        }
      },
    },
    {
      path: "/login",
      name: "login",
      component: login,
      beforeEnter: (to, from) => {
        if (isAuthenticated()) {
          router.push({name: "home"})
        }
      }
    },
  ],
});

export default router;
