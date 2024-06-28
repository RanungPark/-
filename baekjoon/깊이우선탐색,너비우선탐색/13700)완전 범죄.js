const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

const [N, S, D, F, B, K] = input.shift().split(' ').map(Number);

const road = Array(N + 1).fill(0);
road[0] = 1;

if (K > 0) {
  input
    .shift()
    .split(' ')
    .forEach(v => (road[v] = 1));
}

const bfs = node => {
  const q = [];
  q.push(node);
  road[node] = 1;
  while (q.length) {
    const cnode = q.shift();

    if (cnode === D) {
      return;
    }
    
    const dx = [-1, 1, F, -B];
    for (let i = 0; i < dx.length; i++) {
      const nnode = cnode + dx[i];
      if (nnode < 0 || nnode > N) continue;
      if (road[nnode] === 0) {
        road[nnode] = road[cnode] + 1;
        q.push(nnode);
      }
    }
  }
};

bfs(S);

console.log(road);
