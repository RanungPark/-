const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('');

const stack = [];
let count = 0;
for (let value of input) {
  if (value === '(') {
    stack.push(value);
  } else if (value === ')') {
    if (stack[stack.length - 1] === '(') {
      stack.pop();
    } else {
      stack.push(value);
    }
  }
}

console.log(stack.length);
