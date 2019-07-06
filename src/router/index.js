import Vue from 'vue'
import Router from "vue-router"

import home from "./home/index.js"
import created from "./created/index.js"
import animation from "./animation/index.js"
import music from "./music/index.js"
import opera from "./opera/index.js"
Vue.use(Router)

export default new Router({
  routes: [
    home,
    created,
    animation,
    music,
    opera
  ]
})
