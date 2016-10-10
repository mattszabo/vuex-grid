<template>
  <div id="my-grid">
    GRID {{ pos }}
    <br />
    <br />
    <br />
    <div class="my-grid" v-for="row in grid">
      <span v-for="i in row.length">
        <span class="my-grid-square">{{ row[i-1] }}</span>
      </span>
    </div>
    <br>
    <br>
    <br>
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
