function solution(sides) {
  const max_side = Math.max(...sides)
  const min_side = Math.min(...sides)

  let count = 0
  for (let i = 0; i <= max_side; i++) {
    if (i + min_side > max_side) count++
  }

  for (let i = max_side + 1; i < max_side + min_side; i++) {
    if (i < max_side + min_side) count++
  }

  return count
}