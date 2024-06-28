function solution(n) {
  let answer = 0;
  if (n % 2 === 1) {
    for (i = 0; i <= n; i++) {
      if (i % 2 === 1) {
        answer += i
      }
    }
  } else {
    for (i = 0; i <= n; i++) {
      if (i % 2 === 0) {
        answer += i ** 2
      }
    }
  }
  console.log(answer)
  return answer;
}

// function solution(n) {
//   let sum = 0;
//   if(n % 2 === 1){
//       sum = (n+1)*(n+1)/4;
//   } else {
//       sum = n*(n+1)*(n+2)/6;
//   }
//   return sum;
// }