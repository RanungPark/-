function solution(n) {
  let tmp = 1
  let count = 1
  while (1) {
    if (tmp < n) {
      count++
      tmp *= count
    } else if (tmp > n) {
      return count - 1;
    } else if (tmp === n) {
      return count
    }
  }
}