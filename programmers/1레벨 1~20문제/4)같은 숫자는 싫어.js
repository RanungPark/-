function solution(arr) {
  const answer = [];
  arr.map((v, i) => {
    if (v !== answer[answer.length - 1]) {
      answer.push(v)
    }
  })
  return answer;
}