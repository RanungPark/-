function solution(my_string) {
  const alphaB = Array.from({ length: 26 }, (v, i) => String.fromCharCode(i + 65));
  const alphaS = alphaB.map(a => a.toLowerCase());

  const alpha = [...alphaB, ...alphaS];

  const answer = [];
  for (let a of alpha) {
    let tmp = [...my_string].filter(v => v !== a)
    answer.push(my_string.length - tmp.length)
  }
  return answer;
}