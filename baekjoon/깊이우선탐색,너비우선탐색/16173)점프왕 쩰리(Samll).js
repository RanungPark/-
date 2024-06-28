const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

const N = +input.shift();

const map = input.map(v => v.split(' ').map(Number));
const visited = Array.from(Array(N), () => Array(N).fill(false));
map[N - 1][N - 1] = 0;

const dx = [1, 0];
const dy = [0, 1];

const dfs = (x, y) => {
  visited[x][y] = true;
  for (let i = 0; i < 2; i++) {
    const [nx, ny] = [x + dx[i] * map[x][y], y + dy[i] * map[x][y]];
    if (nx < 0 || ny < 0 || nx >= N || ny >= N) continue;
    if (!visited[nx][ny]) {
      dfs(nx, ny);
    }
  }
};

dfs(0, 0);

const answer = visited[N - 1][N - 1] ? 'HaruHaru' : 'Hing';
console.log(answer);
