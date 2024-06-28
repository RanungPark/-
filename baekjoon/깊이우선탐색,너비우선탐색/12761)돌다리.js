const fs = require('fs');
const [A, B, N, M] = fs
  .readFileSync('../input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const visited = Array(100000).fill(false);

let ans = 0;

const bfs = srcx => {
  const q = [];
  visited[srcx] = true;
  q.push(srcx);
  while (q.length) {
    const sz = q.length;
    for (let i = 0; i < sz; i++) {
      const pos = q.shift();
      const next = [
        pos + 1,
        pos - 1,
        pos + A,
        pos - A,
        pos + B,
        pos - B,
        pos * A,
        pos * -A,
        pos * B,
        pos * -B,
      ];

      if (pos === M) {
        return;
      }

      for (const nextPos of next) {
        if (nextPos < 0 || nextPos > 100000) continue;
        if (visited[nextPos]) continue;
        visited[nextPos] = true;
        q.push(nextPos);
      }
    }
    ans++;
  }
};

bfs(N);

console.log(ans);
