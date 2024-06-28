function solution(num_list, n) {
  const answer = [];

  for (let i = 0; i < num_list.length; i += n) {
    const tmp = []
    for (let j = 0; j < n; j++) {
      tmp.push(num_list[i + j])
    }
    answer.push(tmp)
  }

  return answer;
}