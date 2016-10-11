import getters from 'src/store/getters'

const state = {
  width: 9,
  height: 6,
  playerPos: { row: 1, col: 1 },
  foodPos: { row: 0, col: 0 },
  score: 0
}

describe('getters', () => {
  it('gets the current grid', () => {
    const result = getters.grid(state)
    const expectedResult = { rows: 6, cols: 9 }
    expect(result).to.deep.equal(expectedResult)
  })

  it('gets the current player position', () => {
    const result = getters.playerPos(state)
    const expectedResult = { row: 1, col: 1 }
    expect(result).to.deep.equal(expectedResult)
  })

  it('gets current food position', () => {
    const result = getters.foodPos(state)
    const expectedResult = { row: 0, col: 0 }
    expect(result).to.deep.equal(expectedResult)
  })

  it('gets current score', () => {
    const result = getters.score(state)
    expect(result).to.equal(0)
  })
})
