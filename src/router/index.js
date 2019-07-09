import Vue from 'vue'
import Router from "vue-router"

import home from "./home/index.js"
import life from "./life/index.js"
import cartoon from "./cartoon/index.js"
import novel from "./novel/index.js"  
import work from "./work/index.js"
import routing from "./routing/index.js"
import muban from "./muban/index.js"
Vue.use(Router)

export default new Router({
  routes: [
    home,
    life,
    cartoon,
    novel,
    work,
    routing,
    muban,
      {
        path:"/",
        component:()=>import("views/home"),
        name:"home"
    }
    
  ]
})
