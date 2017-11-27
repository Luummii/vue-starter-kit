import Home from '../pages/Home.vue'
import Auth from '../pages/Auth.vue'

export default [
  { path: '/', redirect: 'Home' },
  { path: '/home', name: 'Home', component: Home },
  { path: '/auth', name: 'Auth', component: Auth }
]
