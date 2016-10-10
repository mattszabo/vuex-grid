import Vue from 'vue'
import Grid from 'src/components/Grid'
import store from 'src/store/store'

describe('Grid.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      store,
      render: (h) => h(Grid)
    })
    expect(vm.$el.querySelector('#my-grid h1').textContent).to.equal('Grid app')
  })
})
