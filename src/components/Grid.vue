<template>
  <div id="my-grid">
    <div v-for="row in gridSize.rows">
      <span v-for="col in gridSize.cols">
        <span v-if="playerPos.row === row-1 && playerPos.col === col-1" class="my-grid-square player-square" />
        <span v-else>
          <span v-if="foodPos.row === row-1 && foodPos.col === col-1" class="my-grid-square food-square" />
          <span v-else class="my-grid-square" />
        </span>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    props: [
      'foodPos',
      'playerPos',
      'gridSize'
    ]
  }
</script>

<style scoped>
  #my-grid {
    font-size: 30px;
    margin-bottom: 15px;
  }
  .my-grid-square {
    padding: 0 18px;
    border: 1px solid black;
    background-color: white;
  }
  .player-square {
    background-color: black;
  }
  .food-square {
    background-color: green;
  }
  p {
    padding-top: 0;
    margin-top: 0
  }
</style>
