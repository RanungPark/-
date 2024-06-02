function solution(x) {
  const sum = [...x + ''].reduce((a, c) => a + +c, 0)
  return Number.isInteger(x / sum)
}