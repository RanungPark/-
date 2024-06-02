function solution(babbling) {
  const words = ["aya", "ye", "woo", "ma"]
  const answer = babbling;
  for (const i in answer) {
    for (const word of words) {
      answer[i].includes(word) ? answer[i] = answer[i].replace(word, ' ') : false
    }
  }
  return answer.filter(str => str.trim() === "").length
}

// function solution(babbling) {
//   let answer = 0;
//   const regex = /^(aya|ye|woo|ma)+$/;
//   // 문자열 내에 aya, ye, woo, ma 가 있는지 처음부터 끝까지 모두 검사

//   babbling.forEach(v => {
//       if(regex.test(v)) answer++;
//   })
//   // babbling의 요소 문자열 v가 aya, ye, woo, ma 를 갖고 있으면 true, answer++ 실행
//   return answer;
// }