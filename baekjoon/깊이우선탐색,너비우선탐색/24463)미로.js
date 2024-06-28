const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const map = input.map(v => v.split(''));
const visited = Array.from({ length: N }, () => Array(M).fill(false));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const side = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (
      (i === 0 || i === N - 1 || j === 0 || j === M - 1) &&
      map[i][j] === '.'
    ) {
      side.push([i, j]);
    }
  }
}

const [start, end] = side;

let found = false;
let path = [];

const dfs = (x, y) => {
  if (x === end[0] && y === end[1]) {
    path.push([x, y]);
    found = true;
    return true;
  }

  visited[x][y] = true;
  path.push([x, y]);

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;
    if (!visited[nx][ny] && map[nx][ny] === '.') {
      if (dfs(nx, ny)) return true;
    }
  }

  path.pop();
  return false;
};

dfs(start[0], start[1]);

const pathSet = new Set(path.map(([x, y]) => `${x},${y}`));

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (map[i][j] === '.' && !pathSet.has(`${i},${j}`)) {
      map[i][j] = '@';
    }
  }
}

for (const line of map) {
  console.log(line.join(''));
}
