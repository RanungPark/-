const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

const [n, k] = input.shift().split(' ').map(Number);
const nodes = input.pop().split(' ').map(Number);

const value = input.map(v => v.split(' ').map(Number));
const graph = Array.from(Array(n), () => []);

for (const [src, dest] of value) {
  graph[src].push(dest);
  graph[dest].push(src);
}

const visited = Array(n).fill(-1);

const bfs = node => {
  const queue = [node];
  visited[node] = 0;

  while (queue.length) {
    const curr = queue.shift();
    for (const next of graph[curr]) {
      if (visited[next] === -1) {
        visited[next] = visited[curr] + 1;
        queue.push(next);
      }
    }
  }
};

bfs(0);

let count = 0;

visited.forEach((v, i) => {
  if (v <= k && nodes[i] === 1) count++;
});
console.log(count);
