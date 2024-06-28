const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);

const map = input.map(v => v.split(''));
const visited = Array.from(Array(N), () => Array(M).fill(false));
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

let count = 0;
const dfs = (x, y) => {
  visited[x][y] = true;
  for (let i = 0; i < 4; i++) {
    const [nx, ny] = [x + dx[i], y + dy[i]];
    if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;
    if (!visited[nx][ny] && map[nx][ny] !== 'X') {
      if (map[nx][ny] === 'P') count++;

      visited[nx][ny] = true;

      dfs(nx, ny);
    }
  }
};

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if ((!visited[i], [j] && map[i][j] === 'I')) {
      dfs(i, j);
    }
  }
}
const answer = count === 0 ? 'TT' : count;
console.log(answer);
