const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const map = input.map(v => v.split('').map(Number));
const visited = Array.from(Array(map.length), () =>
  Array(map[0].length).fill(false)
);

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const bfs = () => {
  const q = [[0, 0]];
  while (q.length) {
    const [x, y] = q.shift();
    visited[x][y] = true;
    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];
      if (nx < 0 || ny < 0 || nx >= map.length || ny >= map[0].length) continue;
      if (!visited[nx][ny] && map[nx][ny] === 1) {
        map[nx][ny] = map[x][y] + 1;
        q.push([nx, ny]);
      }
    }
  }
};

bfs();
console.log(map[N - 1][M - 1]);
