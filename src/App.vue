<template>

  <div class="navbar">
    <router-link to="/">Calculator</router-link>
    <router-link to="/reviews">Reviews</router-link>
  </div>
  <div id="empty"/>
  <RouterView/>
</template>

<script>


export default {
  name: 'App',
  components: {
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

.navbar{
  display: grid;
  grid-auto-flow: column;
  margin: 0 auto;
  border-color: black;
  border-style: solid;
  border-width: 2px;
  height: 50px;
  font-size: 40px;
  width: 25%;
}

#empty{
  margin: 100px;
}
</style>
