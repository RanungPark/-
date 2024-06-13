const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const map = input.map(v => v.split(' ').map(Number));
const visited = Array.from(Array(N), () => Array(M).fill(0));

const dx = [1, 0];
const dy = [0, 1];

const bfs = (x, y) => {
  const q = [];
  q.push([x, y]);
  while (q.length) {
    const [cx, cy] = q.shift();
    const move = map[cx][cy];
    for (let i = 1; i <= move; i++) {
      for (let j = 0; j < 2; j++) {
        const [nx, ny] = [cx + dx[j] * i, cy + dy[j] * i];
        if (nx >= N || ny >= M) continue;
        if (visited[nx][ny] === 0) {
          visited[nx][ny] = visited[cx][cy] + 1;
          q.push([nx, ny]);
        }
      }
    }
  }
};

bfs(0, 0);
console.log(visited[N - 1][M - 1]);
