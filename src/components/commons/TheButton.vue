<template>
  <button v-ripple :class="btnClass" type="button">{{ btnText }}</button>
</template>

<script>
export default {
  name: "TheButton",
  props: {
    btnClass: {
      type: String,
      required: false,
    },
    btnText: {
      type: String,
      required: true,
    }
  },
};
</script>

<style scoped>
.btn-ripple {
  position:relative;
  overflow:hidden;
}
</style>