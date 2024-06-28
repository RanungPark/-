const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);

const value = input.splice(0, N - 1).map(v => v.split(' ').map(Number));
const know = input.splice(0, M).map(v => v.split(' ').map(Number));

const graph = Array.from(Array(N + 1), () => []);
const lines = {};

for (const [src, dest, line] of value) {
  lines[`${src}->${dest}`] = line;
  lines[`${dest}->${src}`] = line;
  graph[src].push(dest);
  graph[dest].push(src);
}

const bfs = (node, visited) => {
  const q = [node];
  visited[node] = 0;
  while (q.length) {
    const curr = q.shift();
    for (const next of graph[curr]) {
      if (visited[next] === -1) {
        visited[next] = lines[`${curr}->${next}`] + visited[curr];
        q.push(next);
      }
    }
  }
};

for (const [src, dest] of know) {
  const visited = Array(N + 1).fill(-1);
  bfs(src, visited);
  console.log(visited[dest]);
}
