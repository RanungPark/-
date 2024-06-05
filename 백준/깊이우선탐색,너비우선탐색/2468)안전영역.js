const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');

const n = +input.shift();

const maps = input.map(v => v.split(' ').map(Number));
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
let safetys = [];
let safety = 0;

const bfs = (x, y, h, visited) => {
  const q = [];
  q.push([x, y]);
  while (q.length) {
    const [x, y] = q.shift();

    if (!visited[x][y]) {
      visited[x][y] = true;

      for (i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        if (nx < 0 || ny < 0 || nx >= n || ny >= n) continue;
        q.push([nx, ny]);
      }
    }
  }
};

for (h = 1; h <= 100; h++) {
  const visited = [...Array(n)].map((_, x) =>
    [...Array(n)].map((_, y) => maps[x][y] <= h)
  );
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (!visited[i][j]) {
        bfs(i, j, h, visited);
        safety = safety + 1;
      }
    }
  }
  safetys.push(safety);
  safety = 0;
}

console.log(Math.max(...safetys));
