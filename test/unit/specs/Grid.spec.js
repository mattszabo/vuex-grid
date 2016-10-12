import Vue from 'vue'
import Grid from 'src/components/Grid'

const propsData = {
  gridSize: { rows: 10, cols: 10 },
  foodPos: { row: 0, col: 0 },
  playerPos: { row: 1, col: 1 }
}

describe('<Grid />', () => {
  const Something = Vue.extend(Grid)
  const vm = new Something({ propsData }).$mount()

  it('renders a 10x10 grid', () => {
    expect(vm.$el.querySelectorAll('.my-grid-square').length).to.equal(100)
  })

  it('renders a player square', () => {
    expect(vm.$el.querySelectorAll('.player-square').length).to.equal(1)
  })

  it('renders a food square', () => {
    expect(vm.$el.querySelectorAll('.food-square').length).to.equal(1)
  })
})
