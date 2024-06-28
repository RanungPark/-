function solution(s) {
  const result = [...s].sort((a, b) => a < b ? 1 : -1);
  const resultS = result.filter(v => v >= 'a')
  const resultB = result.filter(v => v < 'a')
  return [...resultS, ...resultB].join("")
}