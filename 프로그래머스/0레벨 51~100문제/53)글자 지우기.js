function solution(my_string, indices) {
  const answer = [];

  [...my_string].map((v, i) => {
    if (!indices.includes(i)) {
      answer.push(v)
    }
  })

  return answer.join('');
}