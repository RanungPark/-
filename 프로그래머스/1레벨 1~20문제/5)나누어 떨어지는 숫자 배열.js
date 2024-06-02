function solution(arr, divisor) {
  const result = arr.filter((v) => v % divisor === 0).sort((a, b) => a - b)
  return result.length !== 0 ? result : [-1];
}