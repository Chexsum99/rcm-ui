import { createWebHistory, createRouter } from "vue-router";
import SignupView from "@/views/SignupView.vue";
import LoginView from "@/views/LoginView.vue";

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: LoginView // TODO: HomeView  
  },
  {
    path: "/login",
    name: "LoginView",
    component: LoginView
  },
  {
    path: "/register",
    name: "SignupView",
    component: SignupView 
  },
  {
    path: "/reset",
    name: "ResetView",
    component: SignupView // TODO: ResetView
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;