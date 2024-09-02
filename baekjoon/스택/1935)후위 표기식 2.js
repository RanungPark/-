const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

const N = +input.shift();
const postfix = input.shift().split('');
const num = input.map(Number);
const stack = [];

for (let value of postfix) {
  const ascii = value.charCodeAt();
  if (ascii >= 65) {
    stack.push(num[ascii - 65]);
  } else {
    const b = stack.pop();
    const a = stack.pop();
    switch (value) {
      case '+':
        stack.push(a + b);
        break;
      case '-':
        stack.push(a - b);
        break;
      case '*':
        stack.push(a * b);
        break;
      case '/':
        stack.push(a / b);
        break;
    }
  }
}
console.log(stack.shift().toFixed(2));

