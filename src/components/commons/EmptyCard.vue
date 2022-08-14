<template>
  <section class="vh-90">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col col-xl-10">
          <div class="card elevated-background-material" style="border-radius: 1rem">
            <div class="row g-0">
              <div v-if="cardImage" class="col-md-6 col-lg-5 d-none d-md-block">
                <img :src="cardImage" :alt="altImage"
                  class="img-fluid" style="border-radius: 1rem 0 0 1rem; opacity: 0.75" />
              </div>
              <div class="col-md-6 col-lg-7 d-flex align-items-center">
                <div class="card-body p-4 p-lg-5 elevated-text-material" style="padding-top: 0 !important">
                  <component v-if="formComponent" :is="formComponent" />

                  <div v-if="copyright" class="small surface-secondary-text-material">
                    &copy; 2022, Cex
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import LoginForm from "@/components/login/LoginForm.vue";
import SignupForm from "@/components/login/SignupForm.vue";

export default {
  name: "EmptyCard",
  components: { LoginForm, SignupForm },
  props: {
    cardImage: {
      type: String,
      required: false,
    },
    altImage: {
      type: String,
      required: false,
    },
    copyright: {
      type: Boolean,
      required: true,
    },
    formComponent: {
      type: String,
      required: false,
    },
  },
};
</script>
