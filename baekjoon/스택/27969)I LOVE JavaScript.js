const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split(' ');

const stack = [];
let answer = 0;

for (const value of input) {
  if (!isNaN(+value)) {
    answer += 8;
  } else if (value === '[') {
    stack.push(value);
  } else if (value === ']') {
    if (!stack.length) break;
    answer += 8;
  } else {
    answer += value.length + 12;
  }
}

console.log(answer);
