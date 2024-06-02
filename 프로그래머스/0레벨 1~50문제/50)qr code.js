function solution(q, r, code) {
  let answer = "";
  for (let i = 0; i < code.length; i++) {
    if (i % q === r) {
      answer += code[i];
    }
  }
  return answer;
}

// function solution(q, r, code) {
//   let answer = "";
//   [...code].map((v, i) => {
//       if(i % q === r) answer += v;
//   })
//   return answer;
// }