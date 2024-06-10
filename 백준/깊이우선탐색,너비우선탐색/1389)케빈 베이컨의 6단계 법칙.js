const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const value = input.map(v => v.split(' ').map(Number));

const graph = Array.from(Array(N + 1), () => []);
for (const [src, dest] of value) {
  graph[src].push(dest);
  graph[dest].push(src);
}
let answer = 5000;
let index = 0;

const bfs = node => {
  const distance = Array(N + 1).fill(0);
  const q = [node];
  while (q.length) {
    const src = q.shift();
    for (const dest of graph[src]) {
      if (dest !== node && distance[dest] === 0) {
        distance[dest] = true;
        distance[dest] = distance[src] + 1;
        q.push(dest);
      }
    }
  }
  return distance;
};

for (let i = 1; i <= N; i++) {
  const result = bfs(i).reduce((pre, cur) => pre + cur, 0);
  if (answer > result) {
    answer = result;
    index = i;
  }
}

console.log(index);
