function solution(s) {
  var answer = true;
  const sLower = s.toLowerCase()
  let p = 0, y = 0

  for (let slower of sLower) {
    slower === 'p' ? p++ : slower === 'y' ? y++ : 0
  }

  return p === y ? true : false;
}