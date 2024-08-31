const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');
const N = +input.shift();
const stack = [];
const answer = [];

for (let i = 0; i < N; i++) {
  const [command, value] = input[i].split(' ');

  switch (command) {
    case 'push':
      stack.push(value);
      break;
    case 'pop':
      answer.push(stack.length ? stack.pop() : -1);
      break;
    case 'size':
      answer.push(stack.length);
      break;
    case 'empty':
      answer.push(stack.length ? 0 : 1);
      break;
    case 'top':
      answer.push(stack.length ? stack[stack.length - 1] : -1);
      break;
  }
}
console.log(answer.join('\n'));
