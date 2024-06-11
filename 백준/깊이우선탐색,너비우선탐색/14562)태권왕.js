const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

const C = +input.shift();
const value = input.map(v => v.split(' ').map(Number));

const bfs = (src, dest) => {
  const visited = Array(100).fill(0);
  const q = [];
  q.push([src, dest]);

  while (q.length) {
    const [csrc, cdest] = q.shift();

    const dsrc = [csrc, 1];
    const ddest = [3, 0];

    for (let i = 0; i < 2; i++) {
      const [nsrc, ndest] = [csrc + dsrc[i], cdest + ddest[i]];

      if (nsrc >= 100 || ndest >= 100) continue;
      if (!visited[nsrc]) {
        visited[nsrc] = visited[csrc] + 1;
        q.push([nsrc, ndest]);

        if (nsrc === ndest) {
          console.log(visited[nsrc]);
          return;
        }
      }
    }
  }
};

value.forEach(([s, t]) => bfs(s, t));

// const fs = require('fs');
// const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

// const C = +input.shift();
// const values = input.map(line => line.split(' ').map(Number));

// const bfs = (src, dest) => {
//   const q = [];
//   q.push([src, dest, 0]);

//   while (q.length) {
//     const [csrc, cdest, count] = q.shift();

//     if (csrc === cdest) {
//       return count;
//     }

//     if (csrc > cdest) {
//       continue;
//     }

//     q.push([csrc * 2, cdest + 3, count + 1]);
//     q.push([csrc + 1, cdest, count + 1]);
//   }

//   return Number.MAX_SAFE_INTEGER;
// };

// values.forEach(([s, t]) => {
//   const result = bfs(s, t);
//   console.log(result);
// });
