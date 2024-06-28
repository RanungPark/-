const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

const [n, m] = input.shift().split(' ').map(Number);
const map = input.map(v => v.split(' ').map(Number));
const distances = Array.from(Array(n), () => Array(m).fill(-1));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const targetfn = () => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (map[i][j] === 2) {
        return [i, j];
      }
    }
  }
};

const bfs = (tx, ty) => {
  const q = [[tx, ty]];
  distances[tx][ty] = 0;

  while (q.length) {
    const [x, y] = q.shift();
    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];
      if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
      if (distances[nx][ny] === -1 && map[nx][ny] === 1) {
        distances[nx][ny] = distances[x][y] + 1;
        q.push([nx, ny]);
      }
    }
  }
};

const target = targetfn();
if (target) {
  bfs(...target);
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (map[i][j] === 0) {
      distances[i][j] = 0;
    }
  }
}

distances.forEach(row => {
  console.log(row.join(' '));
});
