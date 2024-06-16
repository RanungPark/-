const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const T = +input.pop();
const map = input.map(v => v.trim().split(' ').map(Number));

const binaryImage = Array.from(Array(N), () => Array(M).fill(0));

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    const r = map[i][j * 3];
    const g = map[i][j * 3 + 1];
    const b = map[i][j * 3 + 2];
    const avg = (r + g + b) / 3;
    binaryImage[i][j] = avg >= T ? 255 : 0;
  }
}

const visited = Array.from(Array(N), () => Array(M).fill(false));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const dfs = (x, y) => {
  visited[x][y] = true;

  for (let i = 0; i < 4; i++) {
    const [nx, ny] = [x + dx[i], y + dy[i]];
    if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;
    if (!visited[nx][ny] && binaryImage[nx][ny] === 255) {
      dfs(nx, ny);
    }
  }
};

let count = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (!visited[i][j] && binaryImage[i][j] === 255) {
      dfs(i, j);
      count++;
    }
  }
}

console.log(count);
