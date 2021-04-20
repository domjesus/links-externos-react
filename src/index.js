import Vue from "vue";
import App from "./App.vue";

// Globally register all `_base`-prefixed components
// import "@components/_globals";

// Don't warn about using the dev version of Vue in development.
Vue.config.productionTip = process.env.NODE_ENV === "production";

const app = new Vue({
  render: (h) => h(App),
}).$mount("#root");
