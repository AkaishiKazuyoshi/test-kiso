// 基礎コース1日目
export const isOdd = (number: number): boolean => {
  return number % 2 === 1
}
// 基礎コース3日目　％ 演算子を使用しないで isEven 関数を書き換えてください。
export function isEven(number: number): boolean {
  return number - (2 * Math.floor(number / 2)) === 0
}
// 基礎コース3日目　2 つの引数のうち大きい数字を返す getGreaterValue という名前の関数を作成してください。
export const getGreaterValue = (a: number, b: number): number => {
  return a > b ? a : b
}
// 基礎コース3日目　与えられた引数のうち一番大きい数字を返すgetGreatestValue という名前の関数を作成してください。
export const getGreatestValue = (...numbers: number[]): number => {
  // return numbers.reduce((a, b) => a > b ? a : b)
  return Math.max(...numbers)
}