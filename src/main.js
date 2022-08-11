import { createApp } from "vue";
import BootstrapVue3 from "bootstrap-vue-3";
import router from "./router/router.js";
import store from "./store/store.js";
import App from "./App.vue";

// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

// Import personal CSS
import "./assets/css/main.css";
import "./assets/css/bootstrap-var-ow.css";
import "./assets/css/font.css";

const app = createApp(App);
app.use(store);
app.use(router);
app.use(BootstrapVue3);

app.directive('ripple', {
  created: function(el) {
    // listen for click events to trigger the ripple
    el.addEventListener("click", function(e) {
      // Setup
      let target = el.getBoundingClientRect();
      let buttonSize = target.width > target.height ? target.width : target.height;

      // remove any previous ripple containers
      // remove any previous ripple containers
      let elements = document.getElementsByClassName("material-hover");
      while (elements[0]) {
        elements[0].parentNode.removeChild(elements[0]);
      }

      elements = document.getElementsByClassName("ripple");
      while (elements[0]) {
        elements[0].parentNode.removeChild(elements[0]);
      }

      // create the ripple container and append it to the target element
      let ripple = document.createElement("span");
      ripple.setAttribute("class", "ripple");
      el.appendChild(ripple);

      // set the ripple container to the click position and start the animation
      setTimeout(function() {
        ripple.style.width = buttonSize + "px";
        ripple.style.height = buttonSize + "px";
        ripple.style.top = e.offsetY - buttonSize / 2 + "px";
        ripple.style.left = e.offsetX - buttonSize / 2 + "px";
        ripple.setAttribute("class", "ripple ripple-effect");
      }, 100);
    }, false);
  }
});
app.mount('#app');