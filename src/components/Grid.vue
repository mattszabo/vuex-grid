<template>
  <div id="my-grid">
    <h1>Grid app</h1>
    <p>Click on the input box to use keyboard arrows for movement</p>
    <h2>Score: {{ score }}</h2>
    <div class="my-grid">
      <div v-for="row in grid.rows">
        <span v-for="col in grid.cols">
          <span v-if="player.row === row-1 && player.col === col-1" class="my-grid-square active" />
          <span v-else>
            <span v-if="food.row === row-1 && food.col === col-1" class="my-grid-square green" />
            <span v-else class="my-grid-square" />
          </span>
        </span>
      </div>
    </div>
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
  export default {
    methods: {
      move(direction) {
        this.$store.dispatch('move', direction)
      }
    },
    computed: {
      grid() {
        return this.$store.getters.grid
      },
      player() {
        return this.$store.getters.playerPos
      },
      food() {
        return this.$store.getters.foodPos
      },
      score() {
        return this.$store.getters.score
      }
    }
  }
</script>

<style scoped>
  .my-grid {
    font-size: 30px;
    padding-bottom: 10px;
  }
  .my-grid-square {
    padding: 0 15px;
    border: 1px solid black;
    background-color: white;
  }
  .active {
    background-color: black;
  }
  .green {
    background-color: green;
  }
  h1 {
    color: #42b983;
    margin-bottom: 0;
    padding-bottom: 0;
  }
  p {
    padding-top: 0;
    margin-top: 0
  }
</style>
