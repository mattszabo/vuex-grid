import Vue from 'vue'
import Vuex from 'vuex'
import store from 'src/store/store'
import App from 'src/App'

Vue.use(Vuex)

describe('<App />', () => {
  const vm = new Vue({
    el: document.createElement('div'),
    store,
    render: h => h(App)
  })

  it('Computed values return store getter values', () => {
    expect(vm.$children[0].getScore).to.equal(0)
    expect(vm.$children[0].getPlayerPos).to.deep.equal({ row: 1, col: 1 })
    expect(vm.$children[0].getFoodPos).to.deep.equal({ row: 0, col: 0 })
    expect(vm.$children[0].getGridSize).to.deep.equal({ rows: 10, cols: 10 })
  })
})
