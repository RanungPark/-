function solution(a, b) {
  let answer = 0;
  answer = +((a + '') + (b + '')) > +((b + '') + (a + '')) ? +((a + '') + (b + '')) : +((b + '') + (a + ''))
  return answer;
}

// function solution(a, b) {
//   let answer = Math.max(+(a+""+b), +(b+""+a));
//   return answer;
// }