<template>
  <form @submit.prevent="handleLogin">
    <div class="align-items-center mb-3 pb-1">
      <img src="../../assets/images/dnd_logo.png" class="img-fluid w-25 p-3" style="opacity: 0.75" alt="login logo"/>
    </div>
    <div class="align-items-center mb-3 pb-1">
      <span class="h3 fw-bold mb-0">Log in</span>
    </div>

    <h6 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px;">Ispeziona i tuoi tomi magici</h6>

    <div class="form-outline mb-4">
      <input class="form-control form-control-lg input-material" type="text" name="email" v-model="email" required/>
      <label class="form-label" for="email">E-mail</label>
    </div>

    <div class="form-outline mb-4">
      <input class="form-control form-control-lg input-material" type="password" name="password" v-model="password" required/>
      <label class="form-label" for="password">Password</label>
    </div>

    <p class="text-start error-text-color">
      {{ error }}
    </p>

    <div class="pt-1 mb-4">
      <button class="btn btn-dark btn-lg btn-block primary-background-material primary-text-material btn-material"
        type="submit" :disabled="isDisabled" v-ripple>Login</button>
    </div>

    <router-link :to="{ name: 'LoginView' }">
      <a class="small text-muted surface-secondary-text-material" id="passForgot" href="#!">Password dimenticata?</a>
    </router-link>
    <p class="mb-5 pb-lg-2 surface-secondary-text-material">
      Mai stato nell'underdark?
      <router-link :to="{ name: 'SignupView' }">
        <a href="#!" class="surface-secondary-text-material">Entra</a>
      </router-link>
    </p>
  </form>
</template>

<script>
import {computed, ref} from "vue";
import {useStore} from "vuex";
import {useRouter} from "vue-router";
import { firebaseErrors } from '@/firebase/firebase.errorConstants'

export default {
  name: 'LoginForm',
  setup() {
    const email = ref('');
    const password = ref('');
    const error = ref('');

    const store = useStore();
    const router = useRouter();

    const isDisabled = computed(() => {
      return (email.value === '' || password.value === '');
    });

    const handleLogin = async () => {
      try {
        await store.dispatch('login', {
          email: email.value,
          password: password.value
        });
        router.push('/');
      }
      catch (err) {
        if (err.code === firebaseErrors.USER_NOT_FOUND.errorCode) {
          error.value = '* ' + firebaseErrors.USER_NOT_FOUND.errorMessage;
        } else if (err.code === firebaseErrors.WRONG_PASSWORD.errorCode) {
          error.value = '* ' + firebaseErrors.WRONG_PASSWORD.errorMessage;
        } else if (err.code === firebaseErrors.TOO_MANY_REQUEST.errorCode) {
          error.value = '* ' + firebaseErrors.TOO_MANY_REQUEST.errorMessage;
        }
      }
    };

    return {
      handleLogin,
      isDisabled,
      email,
      password,
      error
    }
  }
}
</script>
