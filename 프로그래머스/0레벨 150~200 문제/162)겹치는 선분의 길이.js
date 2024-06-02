function solution(lines) {
  const line = new Array(200).fill(0);

  for (let [start, end] of lines) {
    for (; start < end; start++) line[start + 100]++;
  }

  return line.reduce((a, c) => c > 1 ? a + 1 : a, 0)
}