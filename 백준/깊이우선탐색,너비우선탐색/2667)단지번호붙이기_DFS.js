const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');

const n = +input.shift();

const map = input.map(v => v.split('').map(Number));
const visited = Array.from(Array(n), () => Array(n).fill(false));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

let complexes = 0;
let home = 0;
let homes = [];

const dfs = (x, y) => {
  if (map[x][y] === 1 && !visited[x][y]) {
    visited[x][y] = true;
    home = home + 1;

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx < 0 || ny < 0 || nx >= n || ny >= n) continue;
      if (map[nx][ny] === 1) {
        dfs(nx, ny);
      }
    }
  }
};

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (map[i][j] === 1 && !visited[i][j]) {
      dfs(i, j);
      complexes = complexes + 1;
      homes.push(home);
      home = 0;
    }
  }
}

homes = homes.sort((a, b) => a - b);
const answer = [complexes, ...homes];
console.log(answer.join('\n'));
