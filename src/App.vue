<template>
  <div id="app">
    <h1>Grid app</h1>
    <p>Click on the input box to use keyboard arrows for movement</p>
    <h2>Score: {{ getScore }}</h2>
    <Grid :gridSize="getGridSize" :foodPos="getFoodPos" :playerPos="getPlayerPos" />
    <GridInput />
  </div>
</template>

<script>
import Grid from './components/Grid'
import GridInput from './controllers/GridInput'

export default {
  components: {
    Grid,
    GridInput
  },
  computed: {
    getScore() {
      return this.$store.getters.score
    },
    getPlayerPos() {
      return this.$store.getters.playerPos
    },
    getFoodPos() {
      return this.$store.getters.foodPos
    },
    getGridSize() {
      return this.$store.getters.grid
    }
  }
}
</script>

<style>
html {
  height: 100%;
}
body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
h1 {
  color: #42b983;
  margin-bottom: 0;
  padding-bottom: 0;
}
#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}
#app a {
  color: #42b983;
  text-decoration: none;
}
.logo {
  width: 100px;
  height: 100px
}
</style>
