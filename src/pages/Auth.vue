<template>
  <div>    
    <p>This is Auth page</p>   
    <div class="center">
      <button class="btn" @click="chengeStoreData">Click for store data</button> 
    </div>
    <p> {{ user.message }}</p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {      
      model: {
        email: 'test@vuejs.fun',
        password: 'vuejs.fun'
      }
    }
  },
  computed: {
    ...mapGetters(['user'])  
  },
  methods: {
    ...mapActions(['auth']),
    chengeStoreData () {
      this.auth(this.model)
    }
  }
}
</script>

<style lang="stylus" scoped>
.center
  text-align center

  .btn 
    overflow hidden
    padding 12px 12px
    cursor pointer
    user-select none
    transition all 60ms ease-in-out
    text-align center
    white-space nowrap
    text-decoration none !important
    text-transform none
    text-transform capitalize

    color #FFFFFF
    background #3dd28d
    border 0 none
    border-radius 4px

    font-size 13px
    font-weight 500
    line-height 1.3

    -webkit-appearance none
    -moz-appearance    none
    appearance         none
  
    justify-content center
    align-items center
    flex 0 0 160px
    
    box-shadow 2px 5px 10px rgba(#161616, .1)

    &:hover 
      transition all 60ms ease
      opacity .85    
    
    &:active 
      transition all 60ms ease
      opacity .75    
    
    &:focus 
      outline 1px dotted #959595
      outline-offset -4px
p
  font-size 20px
</style>