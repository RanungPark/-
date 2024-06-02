function solution(myString) {
  const answer = [...myString];
  return answer.map(v => {
    if (v === 'a' || v === 'A') {
      return v.toUpperCase()
    } else return v.toLowerCase()
  }).join('')
}

// function solution(myString) {
//   return [...myString].map(v => ["a", "A"].includes(v) ? "A" : v.toLowerCase()).join("");
// }