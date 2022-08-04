<template>
<form @submit.prevent="handleSubmit" class="mt-4 flex flex-col">
    <div class="align-items-center mb-3 pb-1">
      <img src="../../assets/images/dnd_logo.png" class="img-fluid w-25 p-3" style="opacity: 0.75" alt="login logo"/>
    </div>
    <div class="align-items-center mb-3 pb-1">
      <span class="h3 fw-bold mb-0">Registrati</span>
    </div>

    <h6 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px;">Entra nell'underdark</h6>

    <div class="form-outline mb-4 row">
      <div class="form-outline mb-4 col">
        <input class="form-control form-control-md" type="email" name="email" v-model="email" required/>
        <label class="form-label" for="email">E-mail</label>
      </div>
      <div class="form-outline mb-4 col">
        <input class="form-control form-control-md" type="text" name="username" v-model="username" required/>
        <label class="form-label" for="username">Username</label>
      </div>
    </div>

    <div class="form-outline mb-4 row">
      <div class="form-outline mb-4 col">
        <input class="form-control form-control-md" type="password" name="password" v-model="password" required/>
      <label class="form-label" for="password">Password</label>
      </div>
      <div class="form-outline mb-4 col">
        <input class="form-control form-control-md" type="password" name="passwordCtrl" v-model="passwordCtrl" required/>
      <label class="form-label" for="passwordCtrl">Ripeti password</label>
      </div>
    </div>

    <div class="pt-1 mb-4">
      <button class="btn btn-dark btn-lg btn-block primary-background-material primary-text-material" 
        type="submit" :disabled="isDisabled || !isPassEqual">
        Sign up
      </button>
    </div>

    <p class="mb-5 pb-lg-2 surface-secondary-text-material">
      Già conosciuto Drizzt?
      <router-link :to="{ name: 'LoginView' }">
        <a href="#!" class="surface-secondary-text-material">Magga Cammara</a>
      </router-link>
    </p>
  </form>
</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  name: 'SignupForm',
  setup() {
    const email = ref('')
    const username = ref('')
    const password = ref('')
    const passwordCtrl = ref('')
    const error = ref(null)

    const store = useStore()
    const router = useRouter()

    const isDisabled = computed(() => {
      return (email.value == '' || username.value == '' || password.value == '' ||  passwordCtrl.value == '');
    });
    
    const isPassEqual = computed(() => {
      return password.value === passwordCtrl.value;
    });


    const handleSubmit = async () => {
      try {
        if (password.value !== passwordCtrl.value) {
          alert("Le password non corrispondono");
        } else {
          await store.dispatch('signup', {
            email: email.value,
            password: password.value,
            username: username.value
          })
          router.push('/')
        }
      }
      catch (err) {
        error.value = err.message
      }
    }

    return { 
      handleSubmit,
      isDisabled,
      isPassEqual,
      email,
      username,
      password,
      passwordCtrl,
      error
    }
  }
}
</script>