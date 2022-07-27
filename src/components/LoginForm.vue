<template>
  <section class="vh-100">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col col-xl-10">
          <div class="card elevated-background-material" style="border-radius: 1rem;">
            <div class="row g-0">
              <div class="col-md-6 col-lg-5 d-none d-md-block">
                <img src="../assets/images/tasha_login.jpg"
                  alt="login form" class="img-fluid" style="border-radius: 1rem 0 0 1rem; opacity: 0.75" />
              </div>
              <div class="col-md-6 col-lg-7 d-flex align-items-center">
                <div class="card-body p-4 p-lg-5 elevated-text-material">

                  <form>

                    <div class="align-items-center mb-3 pb-1">
                      <img src="../assets/images/dnd_logo.png" class="img-fluid w-25 p-3" style="opacity: 0.75" alt="login logo"/>
                    </div>
                    <div class="align-items-center mb-3 pb-1">
                      <span class="h1 fw-bold mb-0">Log in as</span>
                    </div>

                    <h5 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px;">Accedi alle tue campagne</h5>

                    <div class="form-outline mb-4">
                      <input type="email" id="form2Example17" class="form-control form-control-lg" />
                      <label class="form-label" for="form2Example17">Username</label>
                    </div>

                    <div class="form-outline mb-4">
                      <input type="password" id="form2Example27" class="form-control form-control-lg" />
                      <label class="form-label" for="form2Example27">Password</label>
                    </div>

                    <div class="pt-1 mb-4">
                      <button class="btn btn-dark btn-lg btn-block primary-background-material primary-text-material" type="button">Login</button>
                    </div>

                    <p class="mb-5 pb-lg-2 surface-secondary-text-material">
                      Non hai un account? 
                      <a href="#!" class="surface-secondary-text-material">Inizia qui</a>
                    </p>

                    
                  </form>

                  <div class="small surface-secondary-text-material">
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
export default {
  name: 'LoginForm'
}
</script>
