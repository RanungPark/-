const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const K = +input.shift();
const results = [];

const bfs = (node, graph, color) => {
  const queue = [node];
  color[node] = 1;

  while (queue.length) {
    const curr = queue.shift();

    for (const next of graph[curr]) {
      if (color[next] === 0) {
        color[next] = -color[curr];
        queue.push(next);
      } else if (color[next] === color[curr]) {
        return false;
      }
    }
  }

  return true;
};


for (let i = 0; i < K; i++) {
  const [V, E] = input.shift().split(' ').map(Number);
  const infos = input.splice(0, E).map(v => v.split(' ').map(Number));
  const graph = Array.from({ length: V }, () => []);
  const color = Array(V).fill(0);

  for (const [src, dest] of infos) {
    graph[src - 1].push(dest - 1);
    graph[dest - 1].push(src - 1);
  }

  let isResult = true;
  for (let i = 0; i < V; i++) {
    if (color[i] === 0) {
      if (!bfs(i, graph, color)) {
        isResult = false;
        break;
      }
    }
  }

  results.push(isResult ? 'YES' : 'NO');
}

console.log(results.join('\n'));
