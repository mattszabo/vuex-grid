<template>
  <div id="app">
    <h1>Grid app</h1>
    <p>Click on the input box to use keyboard arrows for movement</p>
    <h2>Score: {{ getScore }}</h2>
    <Grid :gridSize="getGridSize" :foodPos="getFoodPos" :playerPos="getPlayerPos" />
    <button @click="move('UP')">up</button>
    <button @click="move('DOWN')">down</button>
    <button @click="move('LEFT')">left</button>
    <button @click="move('RIGHT')">right</button>
    <input v-on:keyup.up="move('UP')"
           v-on:keyup.down="move('DOWN')"
           v-on:keyup.left="move('LEFT')"
           v-on:keyup.right="move('RIGHT')">
  </div>
</template>

<script>
import Grid from './components/Grid'

export default {
  components: {
    Grid
  },
  methods: {
    move(direction) {
      this.$store.dispatch('move', direction)
    }
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
