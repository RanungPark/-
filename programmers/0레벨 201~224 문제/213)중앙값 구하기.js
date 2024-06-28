function solution(array) {
  array.sort((a, b) => a - b)
  const center = (array.length - 1) / 2
  return array[center]
}
