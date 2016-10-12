import Vue from 'vue'
import GridInput from 'src/controllers/GridInput.vue'

describe('<GridInput />', () => {
  const GridInputComponent = Vue.extend(GridInput)
  const vm = new GridInputComponent().$mount()

  it('renders 4 buttons', () => {
    expect(vm.$el.querySelectorAll('button').length).to.equal(4)
  })

  it('renders 1 input', () => {
    expect(vm.$el.querySelectorAll('input').length).to.equal(1)
  })
})
