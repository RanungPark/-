const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

const [R, C] = input.shift().split(' ').map(Number);
const map = input.filter((v, i) => i < R).map(v => v.split(' ').map(Number));
const N = +input[R];
const r = input.filter((v, i) => i > R).map(v => v.split(' ').map(Number));
const visited = Array.from(Array(R), () => Array(C).fill(false));

const bfs = arr => {
  q = [];
  q.push(...arr);
  while (q.length) {
    const [cx, cy] = q.shift();
    visited[cx][cy] = true;

    if (cx === R - 1) {
      return map[cx][cy];
    }

    for (let i = 0; i < N; i++) {
      const [dx, dy] = r[i];
      const [nx, ny] = [cx + dx, cy + dy];
      if (nx < 0 || ny < 0 || nx >= R || ny >= C) continue;
      if (!visited[nx][ny] && map[nx][ny] === 1) {
        map[nx][ny] = map[nx][ny] + 1;
        q.push([nx, ny]);
      }
    }
  }
  return -1
};

const start = [];

for (let i = 0; i < C; i++) {
  if (map[0][i] === 1) {
    start.push([0, i]);
  }
}

console.log(bfs(start));

// console.log(Math.min(...answer));

// const fs = require('fs');
// const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

// const [R, C] = input.shift().split(' ').map(Number);
// const map = input.slice(0, R).map(line => line.split(' ').map(Number));
// const N = +input[R];
// const directions = input.slice(R + 1).map(line => line.split(' ').map(Number));

// const bfs = (startX, startY) => {
//   const visited = Array.from(Array(R), () => Array(C).fill(false));
//   const queue = [];
//   queue.push([startX, startY, 0]);
//   visited[startX][startY] = true;

//   while (queue.length > 0) {
//     const [x, y, dist] = queue.shift();

//     if (x === R - 1) {
//       return dist;
//     }

//     for (const [dx, dy] of directions) {
//       const nx = x + dx;
//       const ny = y + dy;

//       if (nx >= 0 && ny >= 0 && nx < R && ny < C && !visited[nx][ny] && map[nx][ny] === 1) {
//         visited[nx][ny] = true;
//         queue.push([nx, ny, dist + 1]);
//       }
//     }
//   }

//   return Infinity; // 갈 수 없는 경우 큰 값 반환
// };

// const answer = [];

// for (let i = 0; i < C; i++) {
//   if (map[0][i] === 1) {
//     const result = bfs(0, i);
//     if (result !== Infinity) {
//       answer.push(result);
//     }
//   }
// }

// const minDistance = Math.min(...answer);
// console.log(minDistance === Infinity ? -1 : minDistance);
