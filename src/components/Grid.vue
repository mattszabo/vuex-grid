<template>
  <div id="my-grid">
    {{ pos }}
    <div class="my-grid" v-for="i in grid.y">
      <span v-for="j in grid.x">
        <span v-if="pos.row === i-1 && pos.col === j-1" class="my-grid-square">X</span>
        <span v-else class="my-grid-square">0</span>
      </span>
    </div>
    <button @click="move('UP')">up</button>
    <button @click="move('DOWN')">down</button>
    <button @click="move('LEFT')">left</button>
    <button @click="move('RIGHT')">right</button>
  </div>
</template>

<script>
  export default {
    methods: {
      move(direction) {
        console.log('dispatching move', direction)
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
</style>
