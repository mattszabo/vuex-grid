<template>
  <div id="my-grid">
    {{ pos }}
    <div class="my-grid" v-for="i in grid.y">
      <span v-for="j in grid.x">
        <span v-if="pos.row === i-1 && pos.col === j-1" class="my-grid-square active"></span>
        <span v-else class="my-grid-square"></span>
      </span>
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
      pos() {
        return this.$store.getters.pos
      }
    }
  }
</script>

<style scoped>
  .my-grid {
    font-size: 30px;
  }
  .my-grid-square {
    padding: 0 15px;
    border: 1px solid black;
    background-color: white;
  }
  .active {
    background-color: black;
  }
</style>
