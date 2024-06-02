function solution(arr) {
  if (arr.length === 1) return [-1];
  const min = Math.min.apply(null, arr);
  return arr.filter((v) => min !== v)
}