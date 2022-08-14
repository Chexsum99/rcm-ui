<template>
  <NavBar />
  <HeroSection />
</template>

<script>
import NavBar from "@/components/commons/NavBar/NavBar.vue";
import HeroSection from "./HeroSection/HeroSection.vue";

export default {
  name: "TheHome",
  components: { NavBar, HeroSection }
}
</script>