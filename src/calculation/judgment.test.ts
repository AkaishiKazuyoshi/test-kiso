import {getGreaterValue, getGreatestValue, isEven, isOdd} from "./judgment";

describe('judgement', () => {
  it('isOdd', () => {
    expect(isOdd(1)).toBeTruthy()
    expect(isOdd(2)).toBeFalsy()
  })

  it('isEven', () => {
    expect(isEven(1)).toBeFalsy()
    expect(isEven(2)).toBeTruthy()
  });

  it('getGreaterValue', () => {
    expect(getGreaterValue(1, 2)).toBe(2)
    expect(getGreaterValue(2, 1)).toBe(2)
  })

  it('getGreatestValue', () => {
    expect(getGreatestValue(10, 15)).toBe(15)
    expect(getGreatestValue(15, 10)).toBe(15)
    expect(getGreatestValue(1, 2, 3, 4, 5)).toBe(5)
    expect(getGreatestValue(1, 10, 3, 4, 5)).toBe(10)
  })
})