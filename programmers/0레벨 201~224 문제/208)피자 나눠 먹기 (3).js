function solution(slice, n) {
  let result = 1
  while (1) {
    if (result * slice >= n) return result
    result++
  }
}