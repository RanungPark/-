function solution(n) {
  const arr = Array(n).fill(0);

  arr[0] = arr[1] = 0

  for (let i = 2; i <= n + 1; i++) {
    if (arr[i] === 1) continue;
    for (let j = i + i; j <= n; j += i) {
      arr[j] = 1;
    }
  }
  
  return arr.filter(v => v).length
}