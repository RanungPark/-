const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

const [m, n] = input.shift().split(' ').map(Number);

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const map = input.map(v => v.split(' ').map(Number));

let area = 0;
let max = 0;
let count = 0;

const dfs = (x, y) => {
  if (map[x][y] === 1) {
    map[x][y] = 0;
    count = count + 1;

    for (i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];
      if (nx < 0 || ny < 0 || nx >= m || ny >= n) continue;
      if (map[nx][ny] === 1) {
        dfs(nx, ny);
      }
    }
  }
};

const bfs = (x, y) => {
  const q = [];
  q.push([x, y]);

  while (q.length) {
    const [x, y] = q.shift();

    if (map[x][y] === 1) {
      map[x][y] = 0;
      count = count + 1;
      for (let i = 0; i < 4; i++) {
        const [nx, ny] = [x + dx[i], y + dy[i]];
        if (nx < 0 || ny < 0 || nx >= m || ny >= n) continue;
        if (map[nx][ny] === 1) {
          q.push([nx, ny]);
        }
      }
    }
  }
};

for (let i = 0; i < m; i++) {
  for (let j = 0; j < n; j++) {
    if (map[i][j] === 1) {
      bfs(i, j);
      area = area + 1;
      if (max < count) max = count;
      count = 0;
    }
  }
}

const answer = [area, max];
console.log(answer.join('\n'));
