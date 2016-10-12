import { mutations, isSameSquare, findRandomEmptySquare } from 'src/store/mutations'

describe('mutations', () => {
  describe('collision detection helper functions', () => {
    const pos1 = { row: 1, col: 1 }
    it('determines if two positions are equal', () => {
      const pos2 = { row: 1, col: 1 }
      const matchingPositions = isSameSquare(pos1, pos2)
      expect(matchingPositions).to.equal(true)
    })

    it('finds a random empty square to place an object in 10x10 grid', () => {
      const emptySquare = findRandomEmptySquare(pos1, 10, 10)
      expect(emptySquare).to.not.deep.equal(pos1)
      expect(emptySquare.row).to.be.at.least(0)
      expect(emptySquare.row).to.be.below(10)
      expect(emptySquare.col).to.be.at.least(0)
      expect(emptySquare.col).to.be.below(10)
    })
  })

  it('moves the player in all four directions', () => {
    let state = {
      width: 10,
      height: 10,
      playerPos: { row: 1, col: 1 },
      foodPos: { row: 0, col: 0 },
      score: 0
    }
    expect(state.playerPos).to.deep.equal({ row: 1, col: 1 })
    mutations.MOVE(state, 'UP')
    expect(state.playerPos).to.deep.equal({ row: 0, col: 1 })
    mutations.MOVE(state, 'DOWN')
    expect(state.playerPos).to.deep.equal({ row: 1, col: 1 })
    mutations.MOVE(state, 'LEFT')
    expect(state.playerPos).to.deep.equal({ row: 1, col: 0 })
    mutations.MOVE(state, 'RIGHT')
    expect(state.playerPos).to.deep.equal({ row: 1, col: 1 })
  })
})
