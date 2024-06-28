function solution(rank, attendance) {
  const answer = []
  for (i in rank) {
    answer.push({
      rank: rank[i],
      attendance: attendance[i],
      index: i
    })
  }

  answer.sort((a, b) => a.rank < b.rank ? -1 : 1);

  const answerOfTrue = answer.filter(v => v.attendance)
  const [answer1, answer2, answer3] = answerOfTrue

  return 10000 * answer1.index + 100 * answer2.index + +answer3.index
}

// function solution(rank, attendance) {
//   rank = rank.map((v, i) => [i, v]);
//   let [a, b, c] = rank.filter((v, i) => attendance[i]).sort((a, b) => a[1] - b[1]);
//   return 10000*a[0] + 100*b[0] + c[0];
// }