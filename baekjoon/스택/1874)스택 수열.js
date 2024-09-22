const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

const n = +input.shift();
const mock = input.map(v => Number(v));
const stack = [];
const answer = [];

let current = 1;
let possible = true;

for (let i = 0; i < n; i++) {
  const target = mock[i];

  while (current <= target) {
    stack.push(current++);
    answer.push('+');
  }

  if (stack[stack.length - 1] === target) {
    stack.pop();
    answer.push('-');
  } else {
    possible = false;
    break;
  }
}

if (possible) {
  console.log(answer.join('\n'));
} else {
  console.log('NO');
}
