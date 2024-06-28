const fs = require('fs');
const input = fs
  .readFileSync('../input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(line => line.split(' ').map(Number));

const [N, M] = input.shift();
const edges = input.splice(0, M);
const T = +input.shift();
const C = input.map(Number);

const graph = Array.from({ length: N + 1 }, () => []);
const reverseGraph = Array.from({ length: N + 1 }, () => []);

for (const [src, dest] of edges) {
  graph[src].push(dest);
  reverseGraph[dest].push(src);
}

const bfs = (start, graph) => {
  const visited = Array(N + 1).fill(false);
  const queue = [start];
  visited[start] = true;

  while (queue.length) {
    const node = queue.shift();
    for (const neighbor of graph[node]) {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        queue.push(neighbor);
      }
    }
  }

  return visited;
};

const visitedFromStart = bfs(1, graph);
const visitedFromEnd = bfs(N, reverseGraph);

for (const node of C) {
  const answer =
    visitedFromStart[node] && visitedFromEnd[node]
      ? 'Defend the CTP'
      : 'Destroyed the CTP';
  console.log(answer);
}
