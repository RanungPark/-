const fs = require('fs');
let input = fs.readFileSync('../input.txt').toString().trim().split('\n');

const N = +input.shift();
const pArray = input
  .shift()
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

let sum = 0;
let accumulatedTime = 0;

for (let i = 0; i < N; i++) {
  accumulatedTime += pArray[i];
  sum += accumulatedTime;
}

console.log(sum);
