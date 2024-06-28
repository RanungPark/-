function solution(picture, k) {
  const result_width = []
  picture.map((string, i) => {
    result_width[i] = ''
    for (const v of [...string]) {
      result_width[i] += v.repeat(k)
    }
  })

  const result = []

  for (const v of result_width) {
    for (let i = 0; i < k; i++) {
      result.push(v)
    }
  }

  return result
}

// function solution(picture, k) {
//   let answer = [];
//   picture.forEach(v => {
//       let tmp = [];
//       for(let i=0; i<k; i++){
//           answer.push([...v].map(t => t.repeat(k)).join(""));
//       }
//   })
//   return answer;
// }