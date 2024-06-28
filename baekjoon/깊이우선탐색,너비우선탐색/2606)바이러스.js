const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

const n = +input.shift();
const l = +input.shift();

const value = input.map(v => v.split(' ').map(Number));

const graph = Array.from(Array(n + 1), () => []);
const visited = Array(n + 1).fill(false);

for (const [src, dest] of value) {
  graph[src].push(dest);
  graph[dest].push(src);
}

let count = 0;
const dfs = node => {
  visited[node] = true;
  for (const next of graph[node]) {
    if (!visited[next]) {
      count++;
      dfs(next);
    }
  }
};

dfs(1);
console.log(count);
