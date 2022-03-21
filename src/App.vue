<template>
  <div id="app" style="margin: 0">
    <NavBar/>
    <router-view />
  </div>
</template>
<script>
import NavBar from "@/components/NavBar";

export default {
  name: 'App',
  components: {
    NavBar
  },
  data: function () {
    return {
      name: 'Max',
      age: 50

    }
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
