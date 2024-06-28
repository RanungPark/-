function solution(numbers, direction) {
  const length = numbers.length

  if (direction === 'left') {
    const arr = numbers.slice(1, length)
    const num = numbers[0]
    return [...arr, num]
  } else if (direction === 'right') {
    const arr = numbers.slice(0, length - 1)
    const num = numbers[length - 1]
    return [num, ...arr]
  }
}