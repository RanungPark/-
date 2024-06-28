const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

const N = +input.shift();
const map = input.map(v => v.split(' ').map(Number));
const visited = Array.from(Array(N), () => Array(N).fill(false));

const dfs = () => {
  const stack = [[0, 0]];
  while (stack.length) {
    const [x, y] = stack.pop();
    const value = map[x][y];
    if (value < 0) return 'HaruHaru';
    if (x + value < N && !visited[x + value][y]) {
      stack.push([x + value, y]);
      visited[x + value][y] = true;
    }
    if (y + value < N && !visited[x][y + value]) {
      stack.push([x, y + value]);
      visited[x][y + value] = true;
    }
  }
  return 'Hing';
};

console.log(dfs());
