import Vue from 'vue'
import Vuex from 'vuex'

import { mutations } from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    width: 10,
    height: 10,
    playerPos: { row: 1, col: 1 },
    foodPos: { row: 0, col: 0 },
    score: 0
  },
  mutations,
  actions,
  getters
})
