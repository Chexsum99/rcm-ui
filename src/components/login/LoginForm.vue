<template>
  <form>
    <div class="align-items-center mb-3 pb-1">
      <img src="../../assets/images/dnd_logo.png" class="img-fluid w-25 p-3" style="opacity: 0.75" alt="login logo"/>
    </div>
    <div class="align-items-center mb-3 pb-1">
      <span class="h3 fw-bold mb-0">Log in</span>
    </div>

    <h6 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px;">Ispeziona i tuoi tomi magici</h6>

    <div class="form-outline mb-4">
      <input type="email" id="form2Example17" class="form-control form-control-lg input-material" />
      <label class="form-label" for="form2Example17">Username</label>
    </div>

    <div class="form-outline mb-4">
      <input type="password" id="form2Example27" class="form-control form-control-lg input-material" />
      <label class="form-label" for="form2Example27">Password</label>
    </div>

    <div class="pt-1 mb-4">
      <button class="btn btn-dark btn-lg btn-block primary-background-material primary-text-material" type="button">Login</button>
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
export default {
  name: 'LoginForm'
}
</script>
