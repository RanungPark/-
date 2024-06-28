const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

const n = +input.shift();

const maps = input.map(v => v.split(' ').map(Number));
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
let safetys = [];
let safety = 0;

const bfs = (x, y, visited) => {
  const q = [];
  q.push([x, y]);

  while (q.length) {
    const [x, y] = q.shift();

    if (!visited[x][y]) {
      visited[x][y] = true;

      for (i = 0; i < 4; i++) {
        const [nx, ny] = [x + dx[i], y + dy[i]];
        if (nx < 0 || ny < 0 || nx >= n || ny >= n) continue;
        if (!visited[nx][ny]) {
          q.push([nx, ny]);
        }
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
        bfs(i, j, visited);
        safety = safety + 1;
      }
    }
  }
  safetys.push(safety);
  safety = 0;
}

console.log(Math.max(...safetys));


// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// const N = +input[0];
// const areas = input.slice(1).map(v => v.split(' ').map(v => +v));

// const offsetX = [0, 0, -1, 1];
// const offsetY = [-1, 1, 0, 0];

// const dfs = (x, y, height, visited) => {
//   offsetX.forEach((dx, i) => {
//     const nx = x + dx;
//     const ny = y + offsetY[i];
//     if (nx >= 0 && nx < N && ny >= 0 && ny < N && !visited[nx][ny]) {
//       visited[nx][ny] = true;
//       dfs(nx, ny, height, visited);
//     }
//   });
// };

// let maxCount = 0;
// for (let height = 0; height <= 100; height++) {
//   let count = 0;
//   const visited = [...Array(N)].map((_, x) => [...Array(N)].map((_, y) => areas[x][y] <= height));
//   for (let i = 0; i < N; i++) {
//     for (let j = 0; j < N; j++) {
//       if (!visited[i][j]) {
//         visited[i][j] = true;
//         dfs(i, j, height, visited);
//         count++;
//       }
//     }
//   }
//   maxCount = Math.max(maxCount, count);
// }

// console.log(maxCount);