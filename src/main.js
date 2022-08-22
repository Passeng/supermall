import Vue from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import store from "./store/index.js";
import FastClick from 'fastclick';

import toast from './components/common/toast/index.js'

Vue.config.productionTip = false;

Vue.prototype.$bus = new Vue();

Vue.use(toast)

// 解决移动端300ms延迟
FastClick.attach(document.body)

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
