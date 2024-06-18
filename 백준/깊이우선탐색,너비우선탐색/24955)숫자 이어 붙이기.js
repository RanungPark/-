const fs = require('fs');
const input = fs
  .readFileSync('../input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(v => v.split(' ').map(Number));

const MOD = 1000000007;
const [N, Q] = input[0];
const A = input[1];
const lines = input.slice(2, N + 1);
const plays = input.slice(N + 1);

const graph = Array.from(Array(N + 1), () => []);

for (const [src, dest] of lines) {
  graph[src].push(dest);
  graph[dest].push(src);
}

const concatenateNumbers = (num1, num2) => {
  const num2Str = num2.toString();
  return (((num1 * Math.pow(10, num2Str.length)) % MOD) + (num2 % MOD)) % MOD;
};

const dfsHelper = (curr, visited, currentNum) => {
  visited[curr] = currentNum;
  for (const next of graph[curr]) {
    if (visited[next] === -1) {
      const newNum = concatenateNumbers(currentNum, A[next - 1]);
      dfsHelper(next, visited, newNum);
    }
  }
};
const dfs = start => {
  const visited = Array(N + 1).fill(-1);
  dfsHelper(start, visited, A[start - 1]);
  return visited;
};

for (const [src, dest] of plays) {
  const arr = dfs(src);
  console.log(arr[dest]);
}
