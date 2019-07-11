import Vue from 'vue'
import Router from "vue-router"

import home from "./home/index.js"
import routing from "./routing/index.js"
import listContent from "./listContent/index.js"
Vue.use(Router)

export default new Router({
  routes: [
    home,
    routing,
    listContent,
      {
        path:"/",
        component:()=>import("views/home"),
        name:"home"
    }
    
  ]
})
