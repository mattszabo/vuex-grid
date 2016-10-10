export default {
  grid: state => ({
    cols: state.width,
    rows: state.height
  }),
  playerPos: state => state.playerPos,
  foodPos: state => state.foodPos,
  score: state => state.score
}
