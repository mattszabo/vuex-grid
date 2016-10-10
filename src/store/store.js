import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    length: 3,
    width: 3,
    grid: [[0, 0, 0],
           [0, 1, 0],
           [0, 0, 0]],
    pos: { row: 1, col: 1 }
  },
  mutations: {
    MOVE(state, direction) {
      let { row, col } = state.pos
      let grid = state.grid
      grid[row][col] = 0
      if (direction === 'UP') {
        row -= 1
      } else if (direction === 'DOWN') {
        row += 1
      } else if (direction === 'LEFT') {
        col -= 1
      } else if (direction === 'RIGHT') {
        col += 1
      }
      grid[row][col] = 1
      state.pos = { row, col }
      state.grid = grid
    }
  },
  actions: {
    move({ commit }, direction) {
      commit('MOVE', direction)
    }
  },
  getters: {
    grid: state => state.grid,
    pos: state => state.pos
  }
})
