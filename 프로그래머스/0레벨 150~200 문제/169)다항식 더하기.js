function solution(polynomial) {
  let x = polynomial.split(' + ').filter(v => [...v].includes('x'))
  let num = polynomial.split(' + ').filter(v => !([...v].includes('x')))

  num = num.reduce((a, c) => a + +c, 0);

  let x_num = x.map(v => v.replace('x', '') || '1')
  x_num = x_num.reduce((a, c) => a + +c, 0);

  let answer = [];
  if (x_num) answer.push(`${x_num === 1 ? "" : x_num}x`);
  if (num) answer.push(num);

  return answer.join(" + ");
}