function solution(my_string) {
  const num = my_string.replace(/[^0-9]/g, '')
  const num_arr = [...num].map(v => +v)
  num_arr.sort()
  return num_arr
}