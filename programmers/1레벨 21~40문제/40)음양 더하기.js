function solution(absolutes, signs) {
  let answer = 0;
  signs.forEach((v, i) => {
    if (v) {
      answer += absolutes[i];
    } else {
      answer -= absolutes[i];
    }
  });

  return answer
}
