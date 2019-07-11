import Vue from 'vue'
import App from './App.vue'
import router from './router/'
import store from './store/'
import Observer from "./observer.js"
Vue.config.productionTip = false
Vue.prototype.$observer = Observer





new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
