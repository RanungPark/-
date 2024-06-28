//에라토스테네스의 채를 이용하여 소수 구하기

function solution(n) {
  const answer = Array(n+1).fill(1)
  
  answer[0] = answer[1] = 0;
  
  for(let i = 2; i <= n + 1; i++) {
      if(answer[i] === 0) continue
      for(let j = i + i; j <= n + 1; j += i) {
          answer[j] = 0
      }
  }    
  
  return answer.filter(v => v).length
}

//제곱근을 이용하면 시간 효율이 빠를 수 있음
// function solution(n) {
//   const answer = Array(n + 1).fill(1)

//   answer[0] = answer[1] = 0;

//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     for (let j = i + i; j <= n; j += i) {
//       answer[j] = 0
//     }
//   }

//   return answer.filter(v => v).length
// }
