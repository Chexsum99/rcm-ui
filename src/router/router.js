import { createWebHistory, createRouter } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import SignupView from "@/views/SignupView.vue";
import { auth } from '../firebase/config'
import store from "../store/store.js"

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView, // TODO: HomeView
    meta: {
      requiresAuth: false
    }
  },
  {
    path: "/login",
    name: "LoginView",
    component: LoginView,
    meta: {
      requiresAuth: false,
      hasToBeNoAuth: true
    }
  },
  {
    path: "/register",
    name: "SignupView",
    component: SignupView,
    meta: {
      requiresAuth: false,
      hasToBeNoAuth: true
    }
  },
  {
    path: "/reset",
    name: "ResetView",
    component: SignupView, // TODO: ResetView
    meta: {
      requiresAuth: false,
      hasToBeNoAuth: true
    } 
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, _from, next) => {
  if (to.meta.requiresAuth) {
    auth.onAuthStateChanged(user => {
      // If user obj does not exist --> redirect to login page
      if (!user) {
        next('login');
      } else {
        store.commit("setUser", user);
        next();
      }
    });
  } else if (to.meta.hasToBeNoAuth) {
    auth.onAuthStateChanged(user => {
      // If user obj does not exist --> redirect to login page
      if (!user) {
        next();
      } else {
        store.commit("setUser", user);
        next('/');
      }
    });
  } else {
    next();
  }
});

export default router;