import Vue from 'vue'
import Grid from 'src/components/Grid'
import store from 'src/store/store'

describe('Grid.vue', () => {
  const vm = new Vue({
    el: document.createElement('div'),
    store,
    render: (h) => h(Grid)
  })

  it('renders correct header contents', () => {
    expect(vm.$el.querySelector('#my-grid h1').textContent).to.equal('Grid app')
  })

  it('renders 4 buttons', () => {
    expect(vm.$el.querySelectorAll('button').length).to.equal(4)
  })
})
