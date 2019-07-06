import Vue from 'vue'
import Router from "vue-router"

import home from "./home/index.js"
import life from "./life/index.js"
import cartoon from "./cartoon/index.js"
import novel from "./novel/index.js"
import work from "./work/index.js"
Vue.use(Router)

export default new Router({
  routes: [
    home,
    life,
    cartoon,
    novel,
    work
  ]
})
