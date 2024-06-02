function solution(num, total) {
  let answer = Array(num).fill(0)
  let over = 0
  let under = Math.ceil(total / num) - Math.floor(num / 2)
  for (const i in answer) {
    if (Math.floor(num / 2) <= i) {
      answer[i] = Math.ceil(total / num) + over;
      over++
    } else {
      answer[i] = under + +i
    }
  }
  return answer
}

// function solution(num, total) {
//   let x = total/num - num/2 + 1/2;
//   let answer = new Array(num).fill().map((_, i) => i+x);
//   return answer;
// }