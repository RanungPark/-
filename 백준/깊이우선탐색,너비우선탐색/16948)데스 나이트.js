const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

const N = +input.shift();
const [srcX, srcY, destX, destY] = input[0].split(' ').map(Number);
const map = Array.from(Array(N), () => Array(N).fill(0));

const visited = Array.from(Array(N), () => Array(N).fill(false));

const dx = [-2, -2, 0, 0, 2, 2];
const dy = [-1, 1, -2, 2, -1, 1];

const bfs = () => {
  const q = [[srcX, srcY]];
  visited[srcX][srcY] = true;

  while (q.length) {
    const [x, y] = q.shift();
    for (let i = 0; i < dx.length; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];
      if (nx < 0 || ny < 0 || nx >= N || ny >= N) continue;
      if (!visited[nx][ny] && map[nx][ny] === 0) {
        visited[nx][ny] = true;
        map[nx][ny] = map[x][y] + 1;
        q.push([nx, ny]);
      }
    }
  }
};

bfs();

const answer = visited[destX][destY] ? map[destX][destY] : -1;

console.log(answer);
