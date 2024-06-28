function solution(age) {
  const ascii_arr = [...age + ''].map(v => +v + 97)
  const str_arr = ascii_arr.map(v => String.fromCharCode(v))
  return str_arr.join('')
}
