function solution(a, b) {
  if (a > b) {
    const tmp = a;
    a = b;
    b = tmp;
  }

  let answer = 0;
  for (let i = a; i <= b; i++) {
    answer += i;
  }

  return answer;
}