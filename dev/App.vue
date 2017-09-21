<template>
  <v-app dark>
    <playground></playground>
  </v-app>
</template>

<script>
  import Playground from './Playground.vue'

  export default {
    components: {
      Playground
    }
  }
</script>

<style lang="stylus">
  @require '../src/stylus/main.styl'
  .application
    height: 100vh
</style>
