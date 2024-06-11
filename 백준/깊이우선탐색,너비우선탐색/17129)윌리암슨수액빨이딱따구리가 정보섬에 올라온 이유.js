const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

const [n, m] = input.shift().split(' ').map(Number);
const map = input.map(v => v.split('').map(Number));
const visited = Array.from(Array(n), () => Array(m).fill(0));
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const bfs = (sx, sy) => {
  const q = [];
  q.push([sx, sy]);
  visited[sx][sy] = 1;

  while (q.length) {
    const [x, y] = q.shift();
    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];
      if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
      if (!visited[nx][ny] && map[nx][ny] !== 1) {
        q.push([nx, ny]);
        visited[nx][ny] = visited[x][y] + 1;
        if ([3, 4, 5].includes(map[nx][ny])) {
          console.log('TAK');
          console.log(visited[nx][ny] - 1);
          return true;
        }
      }
    }
  }
  return false;
};

let found = false;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (map[i][j] === 2) {
      found = bfs(i, j);
      if (found) break;
    }
  }
  if (found) break;
}

if (!found) {
  console.log('NIE');
}
