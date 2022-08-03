<template>
  <EmptyCard :cardImage="require('@/assets/images/tasha_login.jpg')" altImage="Login image" 
    :copyright="false" formComponent="LoginForm"/>
</template>

<script>
import EmptyCard from '@/components/commons/EmptyCard.vue';

  export default {
    name: "LoginView",
    components: { EmptyCard }
}
</script>