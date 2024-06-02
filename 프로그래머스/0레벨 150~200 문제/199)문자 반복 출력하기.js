function solution(my_string, n) {
  let result = ''

  for (const v of [...my_string]) {
    for (let i = 0; i < n; i++) {
      result += v
    }
  }

  return result
}