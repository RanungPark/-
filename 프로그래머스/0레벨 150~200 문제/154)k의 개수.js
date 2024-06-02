function solution(i, j, k) {
  let result = 0
  for (let index = i; index <= j; index++) {
    const s_index = index + '';
    const a_index = [...s_index]
    for (const s of [...s_index]) {
      if (+s === k) ++result
    }
  }
  return result
}