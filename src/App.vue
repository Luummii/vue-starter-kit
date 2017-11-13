<template lang="html">
  <div id="app"> 
    <div class="top">
      <img class="logo" src="./assets/img/logo.png">
      <p>Vue-starter-kit - the template for fast start your app.</p> 
      <app-menu></app-menu>
    </div>      
    <router-view></router-view>
  </div>
</template>

<script>
import AppMenu from './components/AppMenu.vue'

export default {
  name: 'app',
  components: {
    AppMenu
  }
}
</script>

<style lang="stylus">
@import './assets/lib/normalize'

@font-face
  font-family 'Ubuntu-Bold'
  src url('./assets/fonts/Ubuntu-Bold.woff2') format('woff2')
  font-weight bold
  font-style normal  

body
  font-family Ubuntu-Bold
  font-size 30px

.top
  position relative
  background-color #E3E1E9
  height 340px

.logo
  width 200px
  height 200px
  display block
  margin 0 auto
p 
  text-align center
</style>