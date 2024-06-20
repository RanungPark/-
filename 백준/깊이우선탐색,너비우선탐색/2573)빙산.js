const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
let map = input.map(v => v.split(' ').map(Number));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const dfs = (x, y, visited) => {
  visited[x][y] = true;
  for (let i = 0; i < 4; i++) {
    const [nx, ny] = [x + dx[i], y + dy[i]];
    if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;

    if (!visited[nx][ny]) {
      if (map[nx][ny] === 0) {
        if (map[x][y] !== 0) {
          map[x][y] = map[x][y] - 1;
        }
      } else if (map[nx][ny] !== 0) {
        dfs(nx, ny, visited);
      }
    }
  }
};

let answer = 0;

while (true) {
  const visited = Array.from({ length: N }, () => Array(M).fill(false));
  let count = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (map[i][j] > 0 && !visited[i][j]) {
        if (count > 0) {
          console.log(answer);
          process.exit();
        }
        dfs(i, j, visited);
        count++;
      }
    }
  }

  if (count === 0) {
    console.log(0);
    break;
  }

  answer++;
}
