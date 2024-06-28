const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

const [N, M, V] = input.shift().split(' ').map(Number);
const edges = input.map(line => line.trim().split(' ').map(Number));

const graph = Array.from({ length: N + 1 }, () => []);

for (const [src, dest] of edges) {
  graph[src].push(dest);
  graph[dest].push(src);
}

graph.forEach(adj => adj.sort((a, b) => a - b));

const visitedDFS = Array(N + 1).fill(false);
const visitedBFS = Array(N + 1).fill(false);

const dfsResult = [];
const bfsResult = [];

const dfs = node => {
  visitedDFS[node] = true;
  dfsResult.push(node);
  
  for (const neighbor of graph[node]) {
    if (!visitedDFS[neighbor]) {
      dfs(neighbor);
    }
  }
};

const bfs = start => {
  const queue = [start];
  visitedBFS[start] = true;
  
  while (queue.length) {
    const node = queue.shift();
    bfsResult.push(node);
    
    for (const neighbor of graph[node]) {
      if (!visitedBFS[neighbor]) {
        visitedBFS[neighbor] = true;
        queue.push(neighbor);
      }
    }
  }
};

dfs(V);
bfs(V);

console.log(dfsResult.join(' '));
console.log(bfsResult.join(' '));
