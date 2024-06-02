function solution(rny_string) {
  return [...rny_string].map(v => {
    if (v === 'm') return 'rn';
    else return v
  }).join('')
}

// function solution(rny_string) {
//   return [...rny_string].map(v => v === "m" ? "rn" : v).join("");
// }