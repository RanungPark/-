function solution(n) {
  const answer = [];
  for (let i = 0; i < n; i++) {
    answer[i] = [];
    for (let j = 0; j < n; j++) {
      if (i === j) answer[i][j] = 1;
      else answer[i][j] = 0;
    }
  }

  return answer;
}


// function solution(n) {
//   let answer = Array.from(Array(n), () => Array(n).fill(0));
//   for(let i=0; i<n; i++){
//       answer[i][i] = 1;
//   }
//   return answer;
// }