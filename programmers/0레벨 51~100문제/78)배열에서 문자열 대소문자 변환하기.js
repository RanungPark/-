function solution(strArr) {
  const result = strArr.map((v, i) => {
    if (i % 2 === 1) {
      return v.toUpperCase();
    } else {
      return v.toLowerCase();
    }
  })
  return result
}