const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

const [N, K] = input.shift().split(' ').map(Number);

const aArray = input.map(Number).sort((a, b) => b - a);

let count = 0;
let currK = K;
for (let i = 0; i < N; i++) {
  if (aArray[i] > currK) continue;
  if (aArray[i] <= currK) {
    count = count + Math.floor(currK / aArray[i]);
    currK = currK % aArray[i];
  }
}
console.log(count);
