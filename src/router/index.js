import {createRouter, createWebHistory} from 'vue-router';
import HomeView from "../components/HomeView.vue";
import LoginForm from "../components/LoginForm.vue";
import Dashboard from "../components/Dashboard.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: "/login",
      name: 'login',
      component: LoginForm,
      meta: {requiresAuth: true},
    },
    {
      path: "/index",
      name: 'index',
      component: Dashboard,
      meta: {requiresAuth: true},
    }
  ]
});

export default router;
