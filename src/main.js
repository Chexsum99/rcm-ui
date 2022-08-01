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

const app = createApp(App);
app.use(store);
app.use(router);
app.use(BootstrapVue3);
app.mount('#app');