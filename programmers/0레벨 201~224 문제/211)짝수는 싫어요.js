function solution(n) {
  return Array.from({ length: n }, (_, i) => i + 1).filter(v => v % 2 === 1)
}