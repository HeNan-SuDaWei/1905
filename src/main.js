import Vue from 'vue'
import App from './App.vue'
import router from './router/'
import store from './store/'
import axios from  "axios"
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

axios.get("/asimov/collections/slug/fcd7a62be697/public_notes?page=1&count=10&order_by=commented_at").then((data)=>{
  console.log(data)
}).catch(function (error) {
  console.log(error);
});
