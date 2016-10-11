import { moveUp, moveDown, moveLeft, moveRight,
        isSameSquare, findRandomEmptySquare, MOVE } from 'src/store/mutations'

describe('mutations', () => {
  describe('move helper functions', () => {
    const row = 1
    const col = 1
    it('moves player up one space', () => {
      const pos = moveUp(row, col)
      const expectedPos = { row: 0, col: 1 }
      expect(pos).to.deep.equal(expectedPos)
    })

    it('moves player down one space', () => {
      const pos = moveDown(row, col)
      const expectedPos = { row: 2, col: 1 }
      expect(pos).to.deep.equal(expectedPos)
    })

    it('moves player left one space', () => {
      const pos = moveLeft(row, col)
      const expectedPos = { row: 1, col: 0 }
      expect(pos).to.deep.equal(expectedPos)
    })

    it('moves player right one space', () => {
      const pos = moveRight(row, col)
      const expectedPos = { row: 1, col: 2 }
      expect(pos).to.deep.equal(expectedPos)
    })
  })

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
})
