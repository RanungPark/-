function solution(numbers) {
  const n = numbers.length

  let tmp = 0
  for (let i = 0; i < n; i++) {
    for (let j = n - 1; j > i; j--) {
      if (tmp < numbers[i] * numbers[j]) tmp = numbers[i] * numbers[j]
    }
  }
  return tmp
}