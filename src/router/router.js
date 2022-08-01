import { createWebHistory, createRouter } from "vue-router";
import LoginForm from "../components/login/LoginForm.vue";
import SignUpForm from "../components/login/SignUpForm.vue";

const routes = [
  {
    path: "/",
    name: "LoginRoot",
    component: LoginForm    
  },
  {
    path: "/login",
    name: "Login",
    component: LoginForm
  },
  {
    path: "/register",
    name: "Signup",
    component: SignUpForm 
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;