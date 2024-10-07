function solution(n) {
  const num = [...n.toString(3)];
  let i = 0;
  let three = 1;
  let answer = 0;
  while (1) {
    if (i === num.length) break;
    answer += num[i] * three;
    i++;
    three *= 3;
  }

  return answer;
}

console.log(solution(45));
