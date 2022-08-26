import { createWebHistory, createRouter } from "vue-router";
import LoginView from "../views/LoginView.vue";
import Home from "../views/Home.vue";


const routes = [
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/home",
    name: "home",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  base: process.env.BASE_URL,
  routes,
});

export default router;