function solution(arr) {
  const answer = [];
  for (a of arr) {
    for (let i = 0; i < a; i++) {
      answer.push(a)
    }
  }
  return answer;
}

// function solution(arr) {
//   return arr.reduce((acc, cur) => [...acc, ...new Array(cur).fill(cur)], []);
// }