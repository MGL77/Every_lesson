import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// axios 开始
// import VueAxios from "vue-axios"
import axios from "axios"
Vue.prototype.http = axios
// Vue.use(VueAxios, axios)
// axios 结束


// rem 开始
import "./assets/rem.js"
// rem 结束



// vant 开始
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
// vant 结束


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");