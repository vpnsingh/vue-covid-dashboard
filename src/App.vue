<template>
  <div id="app">
    <Header />
  </div>
</template>

<script>
import Header from './components/header'

export default {
  name: 'App',
  components: {
    Header
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
}
body{
  font-family: 'Baloo Thambi 2', cursive !important;
}
</style>
