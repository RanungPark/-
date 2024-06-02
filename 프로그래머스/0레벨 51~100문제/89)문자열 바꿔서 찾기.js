function solution(myString, pat) {
  return +[...myString].map(v => {
    if (v === 'A') {
      return 'B'
    } else {
      return 'A'
    }
  }).join('').includes(pat);
}

// function solution(myString, pat) {
//   let arr = [...myString].map(v => v === "A" ? "B" : "A").join("");
//   return arr.includes(pat) ? 1 : 0;
// }