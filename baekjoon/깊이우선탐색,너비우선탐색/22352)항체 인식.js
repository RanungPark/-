const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const map1 = input.splice(0, N).map(v => v.split(' ').map(Number));
const map2 = input.splice(0, N).map(v => v.split(' ').map(Number));
const visited = Array.from(Array(N), () => Array(M).fill(false));
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const bfs = (x, y, target, change) => {
  const q = [[x, y]];
  visited[x][y] = true;
  map1[x][y] = change;

  while (q.length) {
    const [cx, cy] = q.shift();
    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [cx + dx[i], cy + dy[i]];
      if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;
      if (!visited[nx][ny] && target === map1[nx][ny]) {
        visited[nx][ny] = true;
        map1[nx][ny] = change;
        q.push([nx, ny]);
      }
    }
  }
};

let injected = false;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (!injected)
      if (!visited[i][j] && map1[i][j] !== map2[i][j]) {
        bfs(i, j, map1[i][j], map2[i][j]);
        injected = true;
      }
  }
}

let answer = 'YES';
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (map1[i][j] !== map2[i][j]) {
      answer = 'NO';
      break;
    }
  }
}

console.log(answer);
