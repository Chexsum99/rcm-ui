<template>
  <NavBar />
  <EmptyCard :cardImage="require('@/assets/images/login/drizzt_signup.jpg')" altImage="SignUp image" 
    :copyright="false" formComponent="SignupForm"/>
</template>

<script>
import EmptyCard from '@/components/commons/EmptyCard.vue';
import NavBar from '@/components/commons/NavBar/NavBar.vue';

export default {
  name: "SignupView",
  components: { EmptyCard, NavBar }
}
</script>