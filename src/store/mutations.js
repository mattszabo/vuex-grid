export const moveUp = function(row, col) {
  if (row > 0) {
    row -= 1
  }
  return { row, col }
}

export const moveDown = function(row, col, height = 6) {
  if (row < height - 1) {
    row += 1
  }
  return { row, col }
}

export const moveLeft = function(row, col) {
  if (col > 0) {
    col -= 1
  }
  return { row, col }
}

export const moveRight = function(row, col, width = 9) {
  if (col < width - 1) {
    col += 1
  }
  return { row, col }
}

export const isSameSquare = function(pos1, pos2) {
  return (pos1.row === pos2.row && pos1.col === pos2.col)
}

// only supports one position, lets work in multiple positions
export const findRandomEmptySquare = function(position, width = 9, height = 6) {
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

export default {
  MOVE(state, direction) {
    let { row, col } = state.playerPos
    if (direction === 'UP') {
      state.playerPos = moveUp(row, col)
    } else if (direction === 'DOWN') {
      state.playerPos = moveDown(row, col, state.height)
    } else if (direction === 'LEFT') {
      state.playerPos = moveLeft(row, col)
    } else if (direction === 'RIGHT') {
      state.playerPos = moveRight(row, col, state.width)
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
