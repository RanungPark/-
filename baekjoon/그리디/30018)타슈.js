const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

const N = +input.shift();
const a = input.shift().split(' ').map(Number);
const b = input.shift().split(' ').map(Number);

let sum = 0;

for (let i = 0; i < N; i++) {
  sum += Math.abs(a[i] - b[i]);
}

console.log(sum / 2);
