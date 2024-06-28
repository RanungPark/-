function solution(n) {
  return Number.isInteger(n / 7) ? n / 7 : Math.floor(n / 7) + 1
}