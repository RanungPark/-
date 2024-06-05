const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');

const [M, N, K] = input.shift().split(' ').map(Number);

const map = Array.from(Array(M), () => Array(N).fill(1));

const area = [];
let count = 0;
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

input.map(v => {
  const [lb_y, lb_x, rt_y, rt_x] = v.split(' ').map(Number);
  for (let i = lb_x; i < rt_x; i++) {
    for (let j = lb_y; j < rt_y; j++) {
      map[i][j] = 0;
    }
  }
});

const dfs = (x, y) => {
  map[x][y] = 0;
  count = count + 1;

  for (let i = 0; i < 4; i++) {
    const [nx, ny] = [x + dx[i], y + dy[i]];
    if (nx < 0 || ny < 0 || nx >= M || ny >= N) continue;
    if (map[nx][ny] === 1) {
      dfs(nx, ny);
    }
  }
};

for (let i = 0; i < M; i++) {
  for (let j = 0; j < N; j++) {
    if (map[i][j] === 1) {
      count = 0;
      dfs(i, j);
      area.push(count);
    }
  }
}
area.sort((a, b) => a - b);
const answer = [area.length, area.join(' ')];

console.log(answer.join('\n'));
