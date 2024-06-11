const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input.shift().split(' ').map(Number);

const graph = Array.from({ length: n + 1 }, () => []);
const roads = input.slice(0, m).map(line => line.trim().split(' ').map(Number));
const q = +input[m];
const nroads = input
  .slice(m + 1)
  .map(line => line.trim().split(' ').map(Number));

for (const [src, dest] of roads) {
  graph[src].push(dest);
  graph[dest].push(src);
}

const bfs = () => {
  const distances = Array(n + 1).fill(-1);
  const queue = [1];
  distances[1] = 0;

  while (queue.length > 0) {
    const node = queue.shift();

    for (const neighbor of graph[node]) {
      if (distances[neighbor] === -1) {
        distances[neighbor] = distances[node] + 1;
        queue.push(neighbor);
      }
    }
  }

  return distances.slice(1).join(' ');
};

const sol = [];
for (const [src, dest] of nroads) {
  graph[src].push(dest);
  graph[dest].push(src);
  sol.push(bfs());
}
console.log(sol.join('\n'));
