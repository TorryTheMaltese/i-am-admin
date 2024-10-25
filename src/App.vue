<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <GetAdminAPI />
</template>

<script>
import GetAdminAPI from './components/GetAdminAPI.vue'

export default {
  name: 'App',
  components: {
    GetAdminAPI
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
