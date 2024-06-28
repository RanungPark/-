function solution(arr, flag) {
  const answer = [];
  for (let index in arr) {
    if (!!flag[index]) {
      for (let i = 0; i < arr[index] * 2; i++) {
        answer.push(arr[index]);
      }
    } else {
      for (let i = 0; i < arr[index]; i++) {
        answer.pop();
      }
    }
  }
  return answer;
}

// function solution(arr, flag) {
//   return arr.reduce((acc, cur, i) =>
//     flag[i]
//       ? [...acc, ...new Array(cur * 2).fill(cur)]
//       : acc.slice(0, -cur)
//     , []);
// }