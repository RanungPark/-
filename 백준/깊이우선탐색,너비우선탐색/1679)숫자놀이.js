const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

const N = +input.shift();
const int = input.shift().split(' ').map(Number);
const K = +input.shift();

const dfs = node => {
  const q = [];
  q.push(node[0]);

  while (q.length) {
    const cnode = q.shift();

    
  }
};

dfs(int);
