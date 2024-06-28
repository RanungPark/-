const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);

const A = input.slice(0, N).map(v => v.split('').map(v => v.charCodeAt()));
const B = input.slice(N).map(v => v.split('').map(v => v.charCodeAt()));

const visited = Array.from(Array(N), () => Array(M).fill(false));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const bfs = (x, y) => {
  const queue = [];
  queue.push([x, y]);
  const curr = A[x][y];
  const by = B[x][y] - curr;
  B[x][y] = A[x][y];
  visited[x][y] = true;

  while (queue.length) {
    const [cx, cy] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [cx + dx[i], cy + dy[i]];
      if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;
      if (!visited[nx][ny] && curr === A[nx][ny]) {
        if (B[nx][ny] - curr === by) {
          B[nx][ny] = curr;
        }
        visited[nx][ny] = true;
        queue.push([nx, ny]);
      }
    }
  }
};

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (!visited[i][j]) {
      bfs(i, j);
    }
  }
}

let allSame = true;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (A[i][j] !== B[i][j]) {
      allSame = false;
      break;
    }
  }
}

console.log(allSame ? 'YES' : 'NO');
