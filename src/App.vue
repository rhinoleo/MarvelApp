<template>
  <div id="app">
    <router-link :to="{name:'List'}">
      <h3 class="desc">a library of</h3>
      <img id="logo" src="./assets/marvel_logo.png">
      <h3 class="desc">characters</h3>
    </router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color:#f0f0f0;
  padding-top:10px;
}
#logo {
  width: 80%;
  max-width:200px;
}
.desc {
  margin-bottom:5px;
}
h2, h3, h4 {
  font-weight: bold;
}
a {
  color: black;
  text-decoration: none;
}
</style>
