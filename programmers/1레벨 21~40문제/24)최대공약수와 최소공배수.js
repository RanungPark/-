function solution(n, m) {
  const min = Math.min(n, m)
  let divisor = 0

  for (let i = 0; i <= min; i++) {
    if (n % i === 0 && m % i === 0) {
      divisor = i
    }
  }

  return [divisor, n * m / divisor]
}