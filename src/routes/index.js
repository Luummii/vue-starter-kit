import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home.vue'
import Auth from '../pages/Auth.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/home', name: 'Home', component: Home },
    { path: '/auth', name: 'Auth', component: Auth },
    { path: '*', redirect: '/home' }
  ]
})
