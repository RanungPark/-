const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('');

const stack = [];
for (const value of input) {
  if (!isNaN(value)) {
    stack.push(Number(value));
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
        stack.push(Math.floor(a / b));
        break;
    }
  }
}

console.log(stack.pop());
