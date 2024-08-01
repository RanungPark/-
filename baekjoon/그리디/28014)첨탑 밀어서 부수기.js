const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

const N = +input.shift();
const H = input.shift().split(' ').map(Number);

let count = 1;

for (let i = 0; i < N; i++) {
  if (H[i] < H[i + 1]) {
    count++;
  }
}

console.log(count);
