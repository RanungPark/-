function solution(number, n, m) {
  let answer = 0;
  answer = number % n === 0 && number % m === 0 ? 1 : 0;
  return answer;
}