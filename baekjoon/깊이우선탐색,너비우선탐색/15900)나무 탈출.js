const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

const N = +input.shift();

const value = input.map(v => v.split(' ').map(Number));

const graph = Array.from(Array(N + 1), () => []);
const visited = Array.from(Array(N + 1), () => false);

for (const [src, dest] of value) {
  graph[src].push(dest);
  graph[dest].push(src);
}
console.log(graph)
let count = 0;
// const dfs = node => {
//   visited[node] = true;
//   count++;
//   for (const nnode of graph[node]) {
//     if (!visited[nnode]) {
//       visited[nnode] = true;
//       dfs(nnode);
//     }
//   }
// };

const dfs = node => {
  const stack = [node];
  while (stack.length) {
    const curr = stack.pop();
    if (!visited[curr]) {
      visited[curr] = true;
      count++;
      for (const neighbor of graph[curr]) {
        if (!visited[neighbor]) {
          stack.push(neighbor);
        }
      }
    }
  }
};

dfs(1);
console.log(count / 2 ? 'No' : 'Yes');
