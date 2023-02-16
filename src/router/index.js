import { createRouter, createWebHistory } from 'vue-router'
import SignUp from '../views/SignUp.vue';
import { useRouter } from 'vue-router';

const isAuthenticated = () => !!localStorage.getItem("token");

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "sign-up",
      component: SignUp,
      beforeEnter: (to, from) => {
        if (isAuthenticated()) {
          router.push({name: "Restaurants"})
        }

      },
    },
    {
      path: "/Restaurants",
      name: "Restaurants",
      component: () => import("@/views/Restaurants.vue"),
      beforeEnter: (to, from) => {
        if (!isAuthenticated()) {
          router.push({name: "sign-up"})
        }
      }
    },
  ],
});

export default router;
