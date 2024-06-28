const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

const N = +input.shift();
const value = input.map(v => v.split(' ').map(Number));

const graph = Array.from(Array(N + 1), () => []);
const line = {};

const visited = Array(N + 1).fill(false);
const sum = Array(N + 1).fill(0);

for (const [A, B, C] of value) {
  line[`${A} <-> ${B}`] = C;
  line[`${B} <-> ${A}`] = C;
  graph[A].push(B);
  graph[B].push(A);
}

const bfs = node => {
  const queue = [node];

  while (queue.length) {
    const curr = queue.shift();
    visited[curr] = true;
    for (let next of graph[curr]) {
      if (!visited[next] && sum[next] === 0) {
        sum[next] = line[`${curr} <-> ${next}`] + sum[curr];
        queue.push(next);
      }
    }
  }
};

bfs(1);

console.log(Math.max(...sum));
