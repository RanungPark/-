function solution(n) {
  return [...n + ''].reduce((a, c) => a + +c, 0)
}