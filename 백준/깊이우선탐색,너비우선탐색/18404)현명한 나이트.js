const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');
const [N, M] = input.shift().split(' ').map(Number);
const [sx, sy] = input.shift().split(' ').map(Number);
const dest = input.map(v => v.split(' ').map(Number));
const map = Array.from(Array(N + 1), () => Array(N + 1).fill(0));
const visited = Array.from(Array(N + 1), () => Array(N + 1).fill(false));

const dx = [-2, -2, -1, -1, 1, 1, 2, 2];
const dy = [-1, 1, -2, 2, -2, 2, -1, 1];

const bfs = (x, y) => {
  const q = [];
  q.push([x, y]);
  visited[x][y] = true;
  while (q.length) {
    const [cx, cy] = q.shift();

    for (let i = 0; i < dx.length; i++) {
      const [nx, ny] = [cx + dx[i], cy + dy[i]];
      if (nx <= 0 || ny <= 0 || nx > N || ny > N) continue;
      if (!visited[nx][ny] && map[nx][ny] === 0) {
        map[nx][ny] = map[cx][cy] + 1;
        visited[nx][ny] = true;
        q.push([nx, ny]);
      }
    }
  }
};

bfs(sx, sy);

const answer = [];
dest.forEach(([x, y]) => answer.push(map[x][y]));
console.log(answer.join(' '));
