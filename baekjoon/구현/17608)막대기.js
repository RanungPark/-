const fs = require('fs');
const input = fs
  .readFileSync('../input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

let count = 1;
let highestValue = input[input.length - 1];

for (let i = input.length - 2; i >= 0; i--) {
  if (input[i] > highestValue) {
    highestValue = input[i];
    count++;
  }
}
console.log(count);
