function solution(n) {
  const array = Array.from({ length: n }, (_, i) => i + 1)
  const filter_arr = array.filter(v => v % 2 === 0)
  const reduce_arr = filter_arr.reduce((a, c) => a + c, 0)
  return reduce_arr
}