import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    width: 9,
    height: 6,
    pos: { row: 1, col: 1 }
  },
  mutations: {
    MOVE(state, direction) {
      let { row, col } = state.pos
      if (direction === 'UP') {
        if (row > 0) {
          row -= 1
        }
      } else if (direction === 'DOWN') {
        if (row < state.height - 1) {
          row += 1
        }
      } else if (direction === 'LEFT') {
        if (col > 0) {
          col -= 1
        }
      } else if (direction === 'RIGHT') {
        if (col < state.width - 1) {
          col += 1
        }
      }
      state.pos = { row, col }
    }
  },
  actions: {
    move({ commit }, direction) {
      commit('MOVE', direction)
    }
  },
  getters: {
    grid: state => ({
      x: state.width,
      y: state.height
    }),
    pos: state => state.pos
  }
})
