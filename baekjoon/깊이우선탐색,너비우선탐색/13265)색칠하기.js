const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

const T = +input.shift();
const inputArr = input.map(v => v.split(' ').map(Number));
const results = [];

const bfs = (node, graph, color) => {
  const q = [node];
  color[node] = '1';

  while (q.length) {
    const curr = q.shift();
    for (const next of graph[curr]) {
      if (color[next] === 0) {
        color[next] = -color[curr];
        q.push(next);
      } else if (color[next] === color[curr]) {
        return false;
      }
    }
  }
  return true;
};

for (let i = 0; i < T; i++) {
  const [n, m] = inputArr.shift();
  const value = inputArr.splice(0, m);
  const graph = Array.from(Array(n + 1), () => []);
  const color = Array(n + 1).fill(0);

  for (const [src, dest] of value) {
    graph[src].push(dest);
    graph[dest].push(src);
  }

  let isBipartite = true;
  for (let k = 1; k <= n; k++) {
    if (color[k] === 0) {
      if (!bfs(k, graph, color)) {
        isBipartite = false;
        break;
      }
    }
  }

  results.push(isBipartite ? 'possible' : 'impossible');
}

console.log(results.join('\n'));
