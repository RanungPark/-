const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

const [M, N] = input.shift().split(' ').map(Number);
const map = input.map(v => v.split(' ').map(Number));
const visited = Array.from(Array(M), () => Array(N).fill(false));

const dx = [-1, -1, -1, 0, 1, 1, 1, 0];
const dy = [-1, 0, 1, 1, 1, 0, -1, -1];

const dfs = (x, y) => {
  if (!visited[x][y] && map[x][y] === 1) {
    visited[x][y] = true;
    for (let i = 0; i < 8; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];
      if (nx < 0 || ny < 0 || nx >= M || ny >= N) continue;
      if (!visited[nx][ny] && map[nx][ny] === 1) {
        dfs(nx, ny);
      }
    }
  }
};

let count = 0;
for (let i = 0; i < M; i++) {
  for (let j = 0; j < N; j++) {
    if (!visited[i][j] && map[i][j] === 1) {
      dfs(i, j);
      count = count + 1;
    }
  }
}

console.log(count);
