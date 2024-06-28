function solution(strArr) {
  return strArr.filter(v => {
    if (!v.includes('ad')) return v
  })
}