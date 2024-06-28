function solution(numer1, denom1, numer2, denom2) {
  const numer = numer1 * denom2 + numer2 * denom1
  const denom = denom1 * denom2
  const min_num = Math.min(numer, denom)

  const divisor_arr = []
  for (let i = 1; i <= min_num; i++) {
    if (denom % i === 0 && numer % i === 0) divisor_arr.push(i)
  }
  const divisor = Math.max(...divisor_arr)
  return [numer / divisor, denom / divisor]
}