function solution(emergency) {
  const answer = [];

  for (const i in emergency) {
    answer.push({
      key: emergency[i],
      i
    })
  }

  answer.sort((a, b) => b.key - a.key)

  for (const i in answer) {
    answer[i].result = +i + 1
  }

  answer.sort((a, b) => a.i - b.i)

  return answer.map((v) => v.result)
}