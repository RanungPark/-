const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);

const value = input.map(v => v.split(' ').map(Number));

const graph = Array.from(Array(N + 1), () => []);
const visited = Array(N).fill(false);
visited[0] = true;

for (const [src, dest] of value) {
  graph[src].push(dest);
  graph[dest].push(src);
}

const dfs = node => {
  visited[node] = true;
  for (const next of graph[node]) {
    if (!visited[next]) {
      dfs(next);
    }
  }
};
let count = 0;

for (let i = 0; i <= N; i++) {
  if (!visited[i]) {
    dfs(i);
    count++;
  }
}
console.log(count);
