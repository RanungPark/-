function factorial(n) {
  let num = 1
  for (let i = 1; i <= n; i++) {
    num *= i
  }
  return num
}

function solution(balls, share) {
  const a = factorial(balls);
  const b = factorial(balls - share)
  const c = factorial(share);

  return Math.round(a / (b * c))
}
