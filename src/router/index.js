import Vue from 'vue'
import Router from "vue-router"

import home from "./home/index.js"
import life from "./life/index.js"
import routing from "./routing/index.js"
import serial from "./serial/index.js"
import Pointstired from "./Pointstired/index.js"
import Pay from "./pay/index.js"
import listContent from "./listContent/index.js"
Vue.use(Router)

export default new Router({
  routes: [
    home,
    life,
    serial,
    Pointstired,
    Pay,
    routing,
    listContent,
      {
        path:"/",
        component:()=>import("views/home"),
        name:"home"
    }
    
  ]
})
