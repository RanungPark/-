function solution(left, right) {
  let answer = 0;

  for (let i = left; i <= right; i++) {
    let num = 0;
    for (let j = 0; j <= i; j++) {
      if (i % j === 0) num++;
    }
    answer = num % 2 === 0 ? answer + i : answer - i;
  }
  return answer;
}

console.log(solution(13, 17));
