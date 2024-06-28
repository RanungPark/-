function solution(common) {
  let answer = 0;
  if (common[1] - common[0] === common[2] - common[1]) {
    const num = common[1] - common[0]
    answer = common[common.length - 1] + num
  } else {
    const num = common[1] / common[0]
    answer = common[common.length - 1] * num
  }
  return answer;
}

// function solution(common) {
//   if((common[1] - common[0]) === (common[2] - common[1])){
//       return common.pop() + (common[1] - common[0]);
//   }
//   else {
//       return common.pop() * (common[1] / common[0]);
//   }
// }