function solution(myStr) {
  const arr = [...myStr].map(v => {
    if (v === 'a' || v === 'b' || v === 'c') {
      return ' '
    } else return v
  });

  const result = arr.join('').split(' ').filter(v => !!v);

  return result.length === 0 ? ['EMPTY'] : result;
}

// function solution(myStr) {
//   let answer = myStr.split(/a|b|c/).filter(v => v);
//   return answer.length === 0 ? ["EMPTY"] : answer;
// }