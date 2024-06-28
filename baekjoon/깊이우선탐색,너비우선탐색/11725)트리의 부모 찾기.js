const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

const N = +input.shift();

const value = input.map(v => v.split(' ').map(Number));
const graph = Array.from(Array(N + 1), () => []);
const visited = Array(N).fill(0);

for (const [src, dest] of value) {
  graph[src].push(dest);
  graph[dest].push(src);
}

const dfs = node => {
  for (const next of graph[node]) {
    if (!visited[next]) {
      visited[next] = node;

      dfs(next);
    }
  }
};
dfs(1);

console.log(visited.slice(2).join('\n'));
