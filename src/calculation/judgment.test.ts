import {isOdd} from "./judgment";

describe('judgement', () => {
  it('isOdd', () => {
    expect(isOdd(1)).toBeTruthy()
    expect(isOdd(2)).toBeFalsy()
  })
})