const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const infos = input.splice(0, M).map(v => v.split(' ').map(Number));
const S = +input.shift();
const fan = input.shift().split(' ').map(Number);

const graph = Array.from({ length: N }, () => []);

for (const [src, dest] of infos) {
  graph[src - 1].push(dest - 1);
}

const end = graph
  .map((v, i) => {
    if (v.length === 0) return i;
  })
  .filter(v => v);

const visited = Array(N).fill(false);

const dfs = node => {
  visited[node] = true;

  for (const next of graph[node]) {
    if (!visited[next] && !fan.includes(next + 1)) {
      dfs(next);
    }
  }
};

let check = false;

if (fan.includes(1)) return console.log('Yes');
else if (!fan.includes(1)) {
  if (!graph[0].length) {
    return console.log('yes');
  } else if (graph[0].length) {
    dfs(0);
    for (const target of end) {
      if (visited[target]) check = true;
    }
    const answer = check ? 'yes' : 'Yes';
    return console.log(answer);
  }
}
