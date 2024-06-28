function solution(n) {
  console.log(n)

  const result = [];

  result.push(n);
  while (n !== 1) {
    if (n % 2 === 0) {
      n = n / 2;
      result.push(n);
    } else if (n % 2 === 1) {
      n = (3 * n) + 1;
      result.push(n);
    }
  }
  return result
}

// function solution(n) {
//   let answer = [];
//   do {
//       answer.push(n);
//       if(n % 2 === 0) n /= 2;
//       else n = 3*n+1;
      
//   } while(n !== 1)
//   answer.push(n);
//   return answer;
// }