const fs = require('fs');
const inputs = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = inputs.shift().split(' ').map(Number);

const target = +inputs.pop();
const input = inputs.map(v => v.split(' ').map(Number));

const graph = Array.from(Array(N + 1), () => []);
for (const [src, dest] of input) {
  graph[dest].push(src);
}

let count = 0;
const visited = Array(N + 1).fill(false);

const dfs = node => {
  visited[node] = true;
  for (const neighbor of graph[node]) {
    if (!visited[neighbor]) {
      count++;
      dfs(neighbor);
    }
  }
};

dfs(target);

console.log(count);
