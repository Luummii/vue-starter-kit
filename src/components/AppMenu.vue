<template lang="html">
  <nav>
    <ul>
      <router-link v-for="(item, index) in items_menu" tag="li" :key="index" :to="item.path">{{ item.name }}</router-link>
    </ul>    
  </nav>
</template>

<script>
export default {    
  data () {
    return {
      items_menu: [ { path: '/home', name: 'Home' }, { path: '/auth', name: 'Auth' } ]
    }
  }
}
</script>

<style lang="stylus" scoped>
nav
  background-color #C6C2D3
  font-size 20px
  text-align center

li
  display inline-block
  color #E3E2EA

&:nth-child(even)
  margin 10px

&:hover
  color black
  cursor pointer 

&.router-link-active 
  color black
</style>