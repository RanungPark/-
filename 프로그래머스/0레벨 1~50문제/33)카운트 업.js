function solution(start_num, end_num) {
  const result = [];
  for (let i = start_num; i <= end_num; i++) {
    result.push(i)
  }
  return result
}

// function solution(start, end) {
//   return Array.from(
//       {length: end-start+1}, // 유사배열 - 크기를 지정
//       () => start++
//   );
// }