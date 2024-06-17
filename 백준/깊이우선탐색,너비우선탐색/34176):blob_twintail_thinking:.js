const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

const [D, N, U, T] = input.shift().split(' ').map(Number);
const value = input.map(v => v.split(' ').map(Number));

const node = 2 ** D - 1;
const graphCh = Array.from(Array(node + 1), () => []);
const graphPr = Array.from(Array(node + 1), () => []);

for (let i = 1; i <= node; i++) {
  if (i !== 1) {
    graphPr[i].push(Math.floor(i / 2));
  }
  if (i * 2 < node) {
    graphCh[i].push(i * 2);
    graphCh[i].push(i * 2 + 1);
  }
}

if (value.length) {
  for (const [src, dest] of value) {
    graphCh[src] = graphCh[src].filter(v => v !== dest);
    graphCh[dest] = graphCh[dest].filter(v => v !== src);
    graphPr[src] = graphPr[src].filter(v => v !== dest);
    graphPr[dest] = graphPr[dest].filter(v => v !== src);
  }
}

const bfs = start => {
  const visited = Array(node + 1).fill(-1);
  let deep = 1;
  let time = U;
  visited[0] = 0;

  const bfsChHelper = curr => {
    const queue = [curr];
    visited[curr] = 0;
    while (queue.length) {
      const currNode = queue.shift();
      if (time)
        if (graphCh[currNode].length === 2) {
          if (currNode >= deep) {
            deepCount(currNode);
            time = time + T;
          }
        }

      for (const next of graphCh[currNode]) {
        if (visited[next] === -1) {
          visited[next] = visited[currNode] + time;
          queue.push(next);
        }
      }
    }
  };

  const deepCount = node => {
    if (node >= deep) {
      deep = deep * 2;
      deepCount(node);
    }
  };

  bfsChHelper(start);
  return Math.max(...visited);
};

const dfs = start => {
  const bifurcation = [];
  let time = 0;

  const dfsChHelper = curr => {
    if (graphCh[curr].length === 2) {
      bifurcation.push(curr);
    }
    if (graphCh[curr].length === 0) {
      const point = bifurcation.pop();
      dfsPrHelper(curr, point);
    }
    for (const next of graphCh[curr]) {
      time = time + U;
      dfsChHelper(next);
    }
  };

  const dfsPrHelper = (curr, point) => {
    if (point) {
      time = time + U;
      for (const next of graphPr[curr]) {
        if (next !== point) {
          dfsPrHelper(next, point);
        }
      }
    }
  };

  dfsChHelper(start);
  return time;
};

const b = bfs(1);
const d = dfs(1);

if (b < d) console.log(':blob_twintail_aww:');
if (b > d) console.log(':blob_twintail_sad:');
if (b === d) console.log(':blob_twintail_thinking:');
