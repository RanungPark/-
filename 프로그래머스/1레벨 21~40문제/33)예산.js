function solution(d, budget) {
  d.sort((a, b) => a - b)
  let tmp = budget
  let index = 0
  while (tmp >= 0) {
    tmp -= d[index];
    index++
  }

  return index - 1
}