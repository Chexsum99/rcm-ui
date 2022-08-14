<template>
  <NavBar />
  <EmptyCard :cardImage="require('@/assets/images/login/tasha_login.jpg')" altImage="Login image" 
    :copyright="false" formComponent="LoginForm"/>
</template>

<script>
import EmptyCard from '@/components/commons/EmptyCard.vue';
import NavBar from '@/components/commons/NavBar/NavBar.vue';

export default {
  name: "LoginView",
  components: { EmptyCard, NavBar }
}
</script>