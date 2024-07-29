const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

let [N, K] = input.shift().split(' ').map(Number);
const items = input.map(v => v.split(' ').map(Number));

const dp = Array.from({ length: N + 1 }, () =>
  Array.from({ length: K + 1 }, () => 0)
);

for (let i = 1; i < N + 1; i++) {
  const [W, V] = items[i - 1];

  for (let j = 1; j < K + 1; j++) {
    if (j - W >= 0) {
      dp[i][j] = Math.max(dp[i - 1][j - W] + V, dp[i - 1][j]);
    } else {
      dp[i][j] = dp[i - 1][j];
    }
  }
}

console.log(dp[N][K]);
