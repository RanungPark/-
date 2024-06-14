const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');
const n = +input.shift();
const [src, dest] = input.shift().split(' ').map(Number);

const m = +input.shift();
const value = input.map(v => v.split(' ').map(Number));

const visited = Array(n + 1).fill(-1);
const graph = Array.from(Array(n + 1), () => []);

for (const [src, dest] of value) {
  graph[src].push(dest);
  graph[dest].push(src);
}

const dfs = node => {
  for (const next of graph[node]) {
    if (visited[next] === -1) {
      visited[next] = visited[node] + 1;
      dfs(next);
    }
  }
};

visited[src] = 0;
dfs(src);

console.log(visited[dest]);
