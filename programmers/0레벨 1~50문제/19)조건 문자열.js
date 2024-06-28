function solution(ineq, eq, n, m) {
  let answer = 0;
  
  if(eq === '!') {
      answer = eval(n + ineq + m) ? 1 : 0
      return answer
  }
  answer = eval(n + ineq + eq + m) ? 1 : 0
  return answer;
}

// function solution(ineq, eq, n, m) {
//   const operations = {
//     ">=": (n, m) => n >= m,
//     "<=": (n, m) => n <= m,
//     ">!": (n, m) => n > m,
//     "<!": (n, m) => n < m,
//   };
//   return Number(operations[ineq+eq](n, m));
// }