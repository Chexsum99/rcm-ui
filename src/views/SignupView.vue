<template>
  <EmptyCard :cardImage="require('@/assets/images/drizzt_signup.jpg')" altImage="SignUp image" 
    :copyright="false" formComponent="SignupForm"/>
</template>

<script>
import EmptyCard from '@/components/commons/EmptyCard.vue';

  export default {
    name: "SignupView",
    components: { EmptyCard }
}
</script>