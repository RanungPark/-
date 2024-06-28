function solution(my_string) {
  const num_array = my_string.replace(/[^0-9]/g, ",").split(",")

  return num_array.reduce((a, c) => a + +c, 0)
}

