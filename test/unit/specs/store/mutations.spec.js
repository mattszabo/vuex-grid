import { moveUp, moveDown, moveLeft, moveRight } from 'src/store/mutations'

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
})
