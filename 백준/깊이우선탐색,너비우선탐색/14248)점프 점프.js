const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

const n = +input.shift();
const Ai = input.shift().trim().split(' ').map(Number);
const s = +input.shift();

const visited = Array(n).fill(false);
const x = [-1, 1];

let count = 0;
const dfs = node => {
  count++;
  visited[node] = true;
  for (let i = 0; i < 2; i++) {
    const next = node + Ai[node] * x[i];
    if (next < 0 || next >= n) continue;
    if (!visited[next]) {
      dfs(next);
    }
  }
};

dfs(s - 1);
console.log(count);
