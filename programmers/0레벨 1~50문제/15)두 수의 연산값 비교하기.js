function solution(a, b) {
  let answer = 0;
  answer = +(a + '' + b) > 2 * a * b ? +(a + '' + b) : 2 * a * b
  return answer;
}

// function solution(a, b) {
//   let answer = Math.max(+(a+""+b), 2*a*b);
//   return answer;
// }