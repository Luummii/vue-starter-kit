<template>
  <div>    
    <p>About page</p>   
    <button @click="chengeStoreData">Click for store data</button> 
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      model: {
        email: 'test@vuejs.fun',
        password: 'vuejs.fun'
      }
    }
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

</style>