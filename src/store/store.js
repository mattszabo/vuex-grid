import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const moveUp = function(row, col) {
  if (row > 0) {
    row -= 1
  }
  return { row, col }
}

const moveDown = function(row, col, height) {
  if (row < height - 1) {
    row += 1
  }
  return { row, col }
}

const moveLeft = function(row, col) {
  if (col > 0) {
    col -= 1
  }
  return { row, col }
}

const moveRight = function(row, col, width) {
  if (col < width - 1) {
    col += 1
  }
  return { row, col }
}

export default new Vuex.Store({
  state: {
    width: 9,
    height: 6,
    playerPos: { row: 1, col: 1 },
    foodPos: { row: 0, col: 0 },
    score: 0
  },
  mutations: {
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
      if (state.playerPos.row === state.foodPos.row && state.playerPos.col === state.foodPos.col) {
        let score = state.score
        score++
        state.score = score
        let uniquePos = false
        while (!uniquePos) {
          row = Math.floor(Math.random() * state.height)
          col = Math.floor(Math.random() * state.width)
          if (row !== state.playerPos.row && col !== state.playerPos.col) {
            uniquePos = true
          }
        }
        state.foodPos = { row, col }
      } else {
        // let direction = Math.floor(Math.random() * 4)
        // let { row, col } = state.foodPos
        // if (direction === 1) {
        //   state.foodPos = moveUp(row, col)
        // } else if (direction === 2) {
        //   state.foodPos = moveDown(row, col, state.height)
        // } else if (direction === 3) {
        //   state.foodPos = moveLeft(row, col)
        // } else if (direction === 4) {
        //   state.foodPos = moveRight(row, col, state.width)
        // }
      }
    }
  },
  actions: {
    move({ commit }, direction) {
      commit('MOVE', direction)
    }
  },
  getters: {
    grid: state => ({
      cols: state.width,
      rows: state.height
    }),
    playerPos: state => state.playerPos,
    foodPos: state => state.foodPos,
    score: state => state.score
  }
})
