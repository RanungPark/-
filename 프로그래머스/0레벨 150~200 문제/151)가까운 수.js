function solution(array, n) {
  const tmp = []
  for (const v of array) {
    tmp.push({
      v,
      abs: Math.abs(v - n)
    })
  }
  tmp.sort((a, b) => a.abs - b.abs)
  const sort_abs = tmp.filter((v) => tmp[0].abs === v.abs)
  sort_abs.sort((a, b) => a.v - b.v)
  return sort_abs[0].v
}