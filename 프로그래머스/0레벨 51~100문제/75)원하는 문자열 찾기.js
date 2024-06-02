function solution(myString, pat) {
  const upMyString = myString.toUpperCase();
  const upPat = pat.toUpperCase();

  return +upMyString.includes(upPat)
}

// function solution(myString, pat) {
//   return myString.toLowerCase().includes(pat.toLowerCase()) ? 1 : 0;
// }