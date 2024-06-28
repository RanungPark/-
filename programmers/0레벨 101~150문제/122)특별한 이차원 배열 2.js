function solution(arr) {
  let answer = 0;
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i][j] === arr[j][i]) answer += 1
    }
  }
  return answer === n ** 2 ? 1 : 0;
}

// function solution(arr) {
//   for(let i=0; i<arr.length; i++){
//       for(let j=i; j<arr.length; j++){
//           if(arr[i][j] !== arr[j][i])
//               return 0;
//       }
//   }
//   return 1;
// }