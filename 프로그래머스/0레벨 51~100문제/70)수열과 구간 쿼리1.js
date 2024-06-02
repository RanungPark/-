function solution(arr, queries) {
  for ([s, e] of queries) {
    for (let i = s; i <= e; i++) {
      arr[i] += 1
    }
  }
  return arr;
}

// function solution(arr, queries) {
//   queries.forEach(([s, e]) => {
//       while(s <= e)
//           arr[s++]++;
//   });
//   return arr;
// }