function solution(my_str, n) {
  const answer = Array(Math.ceil(my_str.length / n))

  for (let i = 0; i < Math.ceil(my_str.length / n); i++) {
    answer[i] = my_str.slice(i * n, (i + 1) * n)
  }
  return answer
}