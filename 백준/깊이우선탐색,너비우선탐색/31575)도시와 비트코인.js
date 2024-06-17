const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const map = input.map(v => v.split(' ').map(Number));
const visited = Array.from(Array(M), () => Array(N).fill(false));

const dx = [1, 0];
const dy = [0, 1];

const dfs = (x, y) => {
  if (!visited[x][y] && map[x][y] === 1) {
    visited[x][y] = true;
    for (let i = 0; i < 2; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];
      if (nx < 0 || ny < 0 || nx >= M || ny >= N) continue;
      if (!visited[nx][ny] && map[nx][ny] === 1) dfs(nx, ny);
    }
  }
};

dfs(0, 0);

const answer = visited[M - 1][N - 1] ? 'Yes' : 'No';

console.log(answer);
