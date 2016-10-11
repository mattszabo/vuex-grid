// const actionsInjector = require('inject!src/store/actions')
import actions from 'src/store/actions'

const testAction = (action, args, state, expectedMutations, done) => {
  let count = 0

  const commit = (type, payload) => {
    const mutation = expectedMutations[count]
    expect(mutation.type).to.equal(type)
    if(payload) {
      expect(mutation.payload).to.deep.equal(payload)
    }
    count++
    if(count >= expectedMutations.length) {
      done()
    }
  }
  action({ commit, state }, ...args)

  if(expectedMutations.length === 0) {
    expect(count).to.equal(0)
    done()
  }
}

const state = {
  width: 9,
  height: 6,
  playerPos: { row: 1, col: 1 },
  foodPos: { row: 0, col: 0 },
  score: 0
}

describe('actions', () => {
  it('can move player', done => {
    // second param should be ['UP']
    // fill in state?
    testAction(actions.move, [], state, [
      {type: 'MOVE' }
    ], done)
  })
})
