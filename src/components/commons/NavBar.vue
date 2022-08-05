<template>
  <header class="header surface-text-material">
      <div class="contain-fluid container-xl d-flex align-itmes-center justify-content-between">
        <router-link :to="{ name: 'HomeView' }" class="logo d-flex align-items-center">
            <img :src="require('@/assets/images/dnd_home_logo.png')" alt="Home" class="img-fluid p-3"/>
        </router-link>
        <span>Rpg Campaign Manager</span>
      </div>
  </header>
</template>

<script>
export default {
  name: "NavBar",
}
</script>

<style scoped>
img {
  width: 10% !important; 
  opacity: 0.75;
}

.logo {
  line-height: 0;
}

.logo img {
  margin-right: 6px;
}

.logo span {
  font-size: 30px;
  font-weight: 700;
  letter-spacing: 1px;
  color: #012970;
  font-family: "Nunito", sans-serif;
  margin-top: 3px;
}
</style>
