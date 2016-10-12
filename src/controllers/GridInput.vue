<template>
  <div id="grid-input">
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
    }
  }
</script>
