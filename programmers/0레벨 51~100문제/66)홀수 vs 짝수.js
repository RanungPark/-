function solution(num_list) {
  const a = num_list.filter((_, i) => i % 2 === 0).reduce((a, c) => a + c);
  const b = num_list.filter((_, i) => i % 2 === 1).reduce((a, c) => a + c);

  if (a >= b) {
    return a
  } else {
    return b
  }
}

// function solution(num_list) {
//   return Math.max(
//       num_list.reduce((acc, cur, idx) => acc + (idx % 2 === 0 ? cur : 0), 0), 
//       num_list.reduce((acc, cur, idx) => acc + (idx % 2 !== 0 ? cur : 0), 0)
//   );
// }