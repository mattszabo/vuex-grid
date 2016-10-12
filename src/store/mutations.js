export const isSameSquare = function(pos1, pos2) {
  return (pos1.row === pos2.row && pos1.col === pos2.col)
}

export const findRandomEmptySquare = function(position, width = 10, height = 10) {
  let uniquePos = false
  let row, col
  while (!uniquePos) {
    row = Math.floor(Math.random() * height)
    col = Math.floor(Math.random() * width)
    if (row !== position.row && col !== position.col) {
      uniquePos = true
    }
  }
  return { row, col }
}

export const mutations = {
  MOVE(state, direction) {
    switch (direction) {
      case 'UP':
        state.playerPos.row < 1 ? state.playerPos.row : state.playerPos.row--
        break
      case 'DOWN':
        state.playerPos.row >= state.height - 1 ? state.playerPos.row : state.playerPos.row++
        break
      case 'LEFT':
        state.playerPos.col < 1 ? state.playerPos.col : state.playerPos.col--
        break
      case 'RIGHT':
        state.playerPos.col >= state.width - 1 ? state.playerPos.col : state.playerPos.col++
        break
      default:
        break
    }
    // apply game logic
    let { playerPos, foodPos } = state
    if (isSameSquare(playerPos, foodPos)) {
      let score = state.score
      score++
      state.score = score
      foodPos = findRandomEmptySquare(playerPos)
      state.foodPos = foodPos
    }
  }
}
