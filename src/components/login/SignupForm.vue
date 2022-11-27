<template>
<form @submit.prevent="handleSignup" class="mt-4 flex flex-col">
    <div class="align-items-center mb-3 pb-1">
      <img src="../../assets/images/dnd_logo.png" class="img-fluid w-25 p-3" style="opacity: 0.75" alt="login logo"/>
    </div>
    <div class="align-items-center mb-3 pb-1">
      <span class="h3 fw-bold mb-0">Registrati</span>
    </div>

    <h6 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px;">Entra nell'underdark</h6>

    <div class="form-outline mb-4 row">
      <div class="form-outline mb-4 col">
        <input class="form-control form-control-md input-material" type="email" name="email" v-model="email" required/>
        <label class="form-label" for="email">E-mail</label>
      </div>
      <div class="form-outline mb-4 col">
        <input class="form-control form-control-md input-material" type="text" name="username" v-model="username" required/>
        <label class="form-label" for="username">Username</label>
      </div>
    </div>

    <div class="form-outline mb-4 row">
      <div class="form-outline mb-4 col">
        <input class="form-control form-control-md input-material" type="password" name="password" v-model="password" required/>
        <label class="form-label" for="password">Password</label>
      </div>
      <div class="form-outline mb-4 col">
        <input class="form-control form-control-md input-material" type="password" name="passwordCtrl" v-model="passwordCtrl" required/>
        <label class="form-label" for="passwordCtrl">Ripeti password</label>
      </div>
    </div>

    <p class="text-start error-text-color">
      {{ error }}
    </p>

    <div class="pt-1 mb-4">
      <button class="btn btn-dark btn-lg btn-block primary-background-material primary-text-material btn-material" 
        type="submit" :disabled="isNotFilled" v-ripple>
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
import { firebaseErrors } from '@/firebase/firebase.errorConstants'

export default {
  name: 'SignupForm',
  setup() {
    const email = ref('')
    const username = ref('')
    const password = ref('')
    const passwordCtrl = ref('')
    const error = ref('');

    const store = useStore()
    const router = useRouter()

    const isNotFilled = computed(() => {
      return (email.value === '' || username.value === '' || password.value === '' ||  passwordCtrl.value === '');
    });
    
    const isPassEqual = computed(() => {
      return password.value === passwordCtrl.value;
    });

    const isPassLenghtCorrect = computed(() => {
      return password.value.length > 7;
    });


    const handleSignup = async () => {
      try {
        if (password.value !== passwordCtrl.value) {
          error.value = "* Le password non corrispondono";
        } else if (password.value.length < 8 ){
          error.value = "* La password deve essere di almeno 8 caratteri";
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
        if (err.code === firebaseErrors.EMAIL_ARELADY_EXISTS.errorCode) {
          error.value = '* ' + firebaseErrors.EMAIL_ARELADY_EXISTS.errorMessage;
        } else if (err.code === firebaseErrors.WEAK_PASSWORD.errorCode) {
          error.value = '* ' + firebaseErrors.WEAK_PASSWORD.errorMessage;
        }
      }
    }

    return { 
      handleSignup,
      isNotFilled,
      isPassEqual,
      isPassLenghtCorrect,
      email,
      username,
      password,
      passwordCtrl,
      error
    }
  }
}
</script>