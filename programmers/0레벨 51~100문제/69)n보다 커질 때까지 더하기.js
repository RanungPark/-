function solution(numbers, n) {
  let answer = 0;
  for (let number of numbers) {
    if (answer <= n) {
      answer += number
    }
  }
  return answer;
}

// function solution(numbers, n) {
//   return numbers.reduce((acc, cur) => acc + (acc <= n ? cur : 0), 0);
// }