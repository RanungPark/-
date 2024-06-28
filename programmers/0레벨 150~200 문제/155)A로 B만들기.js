function solution(before, after) {
  const a = [...after].sort().join('')
  const b = [...before].sort().join('')
  return a === b ? 1 : 0;
}