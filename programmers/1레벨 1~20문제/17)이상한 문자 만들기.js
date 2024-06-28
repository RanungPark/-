function solution(s) {
  const words = s.split(' ');
  const answer = [];
  for (const word of words) {
    const tmp = [...word].map((v, i) => {
      if (i % 2 === 0) {
        return v.toUpperCase()
      } else if (i % 2 === 1) {
        return v.toLowerCase()
      }
    })
    answer.push(tmp.join(''))
  }

  return answer.join(' ')
}
