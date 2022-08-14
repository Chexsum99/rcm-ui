<template>
  <header class="header surface-text-material elevated-background-material">
      <div class="contain-fluid container-xl d-flex align-itmes-center justify-content-between left-div-logo">
        
        <router-link :to="{ name: 'HomeView' }" class="logo logo-text d-flex align-items-center">
          <img :src="require('@/assets/images/dnd_home_logo.png')" alt="home" class="img-fluid logo-img" style="width:8%;">
        </router-link>

        <nav id="navbar" class="navbar">
          <ul>
            <li>
              <router-link :to="{ name: 'HomeView' }" class="nav-link scrollto">
                Home
              </router-link>
            </li>
            <li class="dropdown"><a href="#" style="nav-link scrollto"><span>Risorse</span> <i class="bi bi-chevron-right"></i></a>
              <ul style="background-color: #1f1f1f">
                <li class="surface-text-material"><a href="#">DM</a></li>
                <li><a href="#">Giocatore</a></li>
              </ul>
            </li>
          </ul>
          <i class="bi bi-list mobile-nav-toggle"></i>
        </nav>
    </div>
  </header>
</template>

<script>
import "./NavBar.style.css";

export default {
  name: "NavBar",
}
</script>
