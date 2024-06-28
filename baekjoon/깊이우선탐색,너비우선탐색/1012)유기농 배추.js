const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');
const T = +input.shift();

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
const inputArr = input.map(v => v.split(' ').map(Number));

let visited = [];
let map = [];

const dfs = (x, y, N, M) => {
  visited[x][y] = true;

  for (let i = 0; i < 4; i++) {
    const [nx, ny] = [x + dx[i], y + dy[i]];
    if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;
    if (!visited[nx][ny] && map[nx][ny] === 1) {
      dfs(nx, ny, N, M);
    }
  }
};

for (let i = 0; i < T; i++) {
  const [M, N, K] = inputArr.shift();
  let count = 0;

  map = Array.from(Array(N), () => Array(M).fill(0));
  visited = Array.from(Array(N), () => Array(M).fill(false));

  inputArr.splice(0, K).forEach(([x, y]) => (map[y][x] = 1));

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (!visited[i][j] && map[i][j] === 1) {
        dfs(i, j, N, M);
        count++;
      }
    }
  }

  console.log(count);
}
