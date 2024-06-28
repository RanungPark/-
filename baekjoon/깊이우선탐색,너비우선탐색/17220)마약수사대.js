const fs = require('fs');
const input = fs
  .readFileSync('../input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(line => line.split(' '));

const [N, M] = input.shift().map(Number);
const [num, ...know] = input.pop();
const Anum = 'A'.charCodeAt();

const graphCh = Array.from({ length: N }, () => []);
const graphPr = Array.from({ length: N }, () => []);

for (const [src, dest] of input) {
  const srcNum = src.charCodeAt() - Anum;
  const destNum = dest.charCodeAt() - Anum;

  if (!know.includes(dest)) {
    graphCh[srcNum].push(destNum);
  }
  graphPr[destNum].push(srcNum);
}

let count = 0;

const visited = Array(N).fill(false);

const dfs = curr => {
  visited[curr] = true;
  for (const next of graphCh[curr]) {
    if (!visited[next]) {
      count++;
      dfs(next);
    }
  }
};

for (let i = 0; i < N; i++) {
  if (!graphPr[i].length && !know.includes(String.fromCharCode(i + Anum))) {
    dfs(i);
  }
}

console.log(count);
