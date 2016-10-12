import Vue from 'vue'
import GridInput from 'src/controllers/GridInput.vue'
import store from 'src/store/store'

// const state = {
//   width: 10,
//   height: 10,
//   playerPos: { row: 1, col: 1 },
//   foodPos: { row: 0, col: 0 },
//   score: 0
// }

describe('<GridInput />', () => {
  const GridInputComponent = Vue.extend(GridInput)
  let vm = new GridInputComponent().$mount()
  it('renders 4 buttons', () => {
    expect(vm.$el.querySelectorAll('button').length).to.equal(4)
  })

  it('renders 1 input', () => {
    expect(vm.$el.querySelectorAll('input').length).to.equal(1)
  })

  it('dispatches the move action', () => {
    vm = new Vue({
      el: document.createElement('div'),
      store,
      render: h => h(GridInput)
    })
    vm.$children[0].move('UP')
    expect(vm.$children[0].$store.getters.playerPos).to.deep.equal({ row: 0, col: 1 })
  })
})
