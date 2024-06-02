function solution(n) {
  let result = 0
  for (let i = 1; i <= n; i++) {
    result++
    if (result % 3 === 0) result++
    while ([...(result + '')].includes('3')) result++
    if (result % 3 === 0) result++
  }

  return result
}
