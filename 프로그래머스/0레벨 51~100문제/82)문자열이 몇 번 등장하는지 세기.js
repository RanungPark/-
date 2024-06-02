function solution(myString, pat) {
  let result = 0
  for (i in [...myString]) {
    if (pat.toString() === myString.slice(i, +i + pat.length).toString()) result++
  }
  return result
}