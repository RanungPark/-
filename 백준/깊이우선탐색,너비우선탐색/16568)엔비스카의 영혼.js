// const fs = require('fs');
// const [N, a, b] = fs
//   .readFileSync('../input.txt')
//   .toString()
//   .trim()
//   .split(' ')
//   .map(Number);

// const line = Array(N).fill(0);
// const visited = Array(N).fill(false);

// const bfs = node => {
//   const dnode = [0, a, b];
//   const q = [];
//   q.push(node);
//   visited[node] = true;
//   while (q.length) {
//     const cnode = q.shift();
//     for (let i = 0; i < 3; i++) {
//       const nnode = cnode + dnode[i];
//       if (!visited[nnode] && line[nnode] === 0) {
//         line.pop();
//         line[nnode] = line[cnode] + 1;
//         visited[nnode] = true;
//         q.push(nnode);
//       }
//     }
//   }
// };

// bfs(0);
// console.log(visited, line);
const fs = require('fs');
const [N, a, b] = fs
  .readFileSync('../input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const bfs = (N, a, b) => {
  const visited = Array(N + 1).fill(false);
  const queue = [];
  let time = 0;

  queue.push(N);
  visited[N] = true;

  while (queue.length > 0) {
    let size = queue.length;

    for (let i = 0; i < size; i++) {
      const current = queue.shift();
      if (current === 0) {
        return time;
      }

      if (current - 1 >= 0 && !visited[current - 1]) {
        queue.push(current - 1);
        visited[current - 1] = true;
      }

      if (current - a - 1 >= 0 && !visited[current - a - 1]) {
        queue.push(current - a - 1);
        visited[current - a - 1] = true;
      }
      
      if (current - b - 1 >= 0 && !visited[current - b - 1]) {
        queue.push(current - b - 1);
        visited[current - b - 1] = true;
      }
    }

    time++;
  }

  return -1;
};



console.log(bfs(N, a, b));
