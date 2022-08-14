<template>
  <section id="hero" class="d-flex align-items-center">
    <div class="text-start container position-relative">
      <h1>Benvenuto</h1>
      <h2>RPG Campaign maker ti permette di gestire i tuoi personaggi e le tue campagne</h2>
      <router-link :to="{ name: 'LoginView' }" class="btn-get-started scrollto no-router-decoration" v-if="!isAuthenticated">Login</router-link>
      &nbsp;
      <router-link :to="{ name: 'HomeView' }" class="btn-get-started scrollto no-router-decoration" v-if="isAuthenticated">Continua come DM</router-link>
      &nbsp;
      <router-link :to="{ name: 'HomeView' }" class="btn-get-started scrollto no-router-decoration" v-if="isAuthenticated">Continua come Giocatore</router-link>
    </div>
  </section>
</template>

<script>
import "./HeroSection.style.css";
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: "HeroSection",
  mounted: function () {
    this.timer = setInterval(() => {
      let imgArray = require("@/assets/images/landing/landing_" + this.counter + ".jpg");
      document.getElementById("hero").style = "background: url(" + imgArray +") top center; background-size: cover;"
      this.counter++;

      if (this.counter > this.maxCount) {
        this.counter = 0;
      }
    }, 10000)
  },
  
  data() {
    return {
      timer: null,
      counter: 1,
      maxCount: 2,
    }
  },

  unmounted: function () {
    clearInterval(this.timer);
    this.counter = 1;
  },

  setup() {
    const store = useStore();

    const isAuthenticated = computed(() => {
      return store.state.user;
    });

    return { 
      isAuthenticated
    }
  }
}
</script>
