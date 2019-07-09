import Vue from 'vue'
import Router from "vue-router"

import home from "./home/index.js"
import life from "./life/index.js"
import routing from "./routing/index.js"
Vue.use(Router)

export default new Router({
  routes: [
    home,
    life,
    routing,
      {
        path:"/",
        component:()=>import("views/home"),
        name:"home"
    }
    
  ]
})
