function solution(numbers, k) {
  const answer = [];
  for (let i = 0; i < numbers.length * 1000; i++) {
    answer.push(...numbers)
  }

  let result
  result = answer[2 * k - 2]
  return result;
}
