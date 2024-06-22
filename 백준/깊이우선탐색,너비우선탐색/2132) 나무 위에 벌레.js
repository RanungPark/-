// const fs = require('fs');
// const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

// const n = +input.shift();
// const fruit = [0, ...input.shift().split(' ').map(Number)];
// const infos = input.map(v => v.split(' ').map(Number));
// const graph = Array.from({ length: n + 1 }, () => []);

// for (const [src, dest] of infos) {
//   graph[src].push(dest);
//   graph[dest].push(src);
// }

// const dfs = (node, sum) => {
//   visited[node] = true;
//   if (max.sum < sum) max = { node, sum };
//   for (const next of graph[node]) {
//     if (!visited[next]) {
//       nextSum = sum + fruit[next];
//       visited[next] = true;
//       dfs(next, nextSum);
//     }
//   }
// };

// let visited = Array(n + 1).fill(false);
// let max = { node: 1, sum: 0 };
// dfs(1, fruit[1]);
// max.sum = 0;
// visited = Array(n + 1).fill(false);
// dfs(max.node, fruit[max.node]);

// console.log(max.sum, max.node);
const fs = require('fs');

const input = fs.readFileSync('../input.txt').toString().split('\n');

const n = +input[0];
console.log(n)

const data = new Array(n + 1).fill(0);
const list = new Array(n + 1).fill(null).map(() => []);

console.log(data, list)
const dataTokens = input[1].split(' ');
for (let i = 1; i <= n; i++) {
  data[i] = parseInt(dataTokens[i - 1]);
}

for (let i = 2; i < n + 1; i++) {
  const edge = input[i].split(' ');
  const a = parseInt(edge[0]);
  const b = parseInt(edge[1]);

  list[a].push([b, data[b]]);
  list[b].push([a, data[a]]);
}

let r, s, e;

s = 1;
e = 10001;
r = 0;
dfs(1, 0, data[1]);

s = e;
r = 0;
e = 10001;
dfs(s, 0, data[s]);

console.log(`${r} ${Math.min(s, e)}`);

function dfs(idx, pa, cost) {
  if (cost > r) {
    r = cost;
    e = idx;
  } else if (cost === r) {
    e = Math.min(e, idx);
  }

  for (const nxt of list[idx]) {
    if (nxt[0] !== pa) {
      dfs(nxt[0], idx, cost + nxt[1]);
    }
  }
}
