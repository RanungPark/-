function solution(numbers) {
  let result = []

  for (let i = 0; i < numbers.length; i++) {
    for (let j = numbers.length - 1; j > i; j--) {
      result.push(numbers[i] * numbers[j])
    }
  }

  return Math.max(...result)
}