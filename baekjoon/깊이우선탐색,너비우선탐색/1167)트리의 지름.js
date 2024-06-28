const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

const V = +input.shift();
const infos = input.map(v => v.split(' ').map(Number));

const graph = Array.from({ length: V }, () => []);
const lines = {};

for (const info of infos) {
  const src = info.shift();
  while (info[0] !== -1) {
    const [dest, length] = info.splice(0, 2);
    graph[src - 1].push(dest - 1);
    lines[`${src - 1}->${dest - 1}`] = length;
  }
}

const dfs = (node, dist) => {
  visited[node] = true;
  if (max.dist < dist) max = { node, dist };
  for (let next of graph[node]) {
    if (!visited[next]) {
      nextdist = lines[`${node}->${next}`] + dist;
      dfs(next, nextdist);
    }
  }
};

let visited = Array(V).fill(false);
let max = { node: 0, dist: 0 };
dfs(0, 0);

max.dist = 0;
visited = Array(V).fill(false);
dfs(max.node, 0);

console.log(max.dist);
