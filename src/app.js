import Vue from 'vue'
import VueRouter from 'vue-router'
import { sync } from 'vuex-router-sync'

import App from './App.vue'
import routes from './routes'
import store from './store/index'

// For use routers
Vue.use(VueRouter)
export const router = new VueRouter({
  mode: 'history',
  routes
})

sync(store, router)

new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})