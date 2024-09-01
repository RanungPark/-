const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

const N = +input.shift();
const stack = [];
const answer = [];

for (let i = 0; i < N; i++) {
  const [command, value] = input[i].split(' ').map(Number);
  if (command === 1) {
    stack.push(value);
  } else if (command === 2) {
    if (stack.length) {
      answer.push(stack.pop());
    } else {
      answer.push(-1);
    }
  } else if (command === 3) {
    answer.push(stack.length);
  } else if (command === 4) {
    if (stack.length) {
      answer.push(0);
    } else {
      answer.push(1);
    }
  } else if (command === 5) {
    if (stack.length) {
      answer.push(stack[stack.length - 1]);
    } else {
      answer.push(-1);
    }
  }
}

console.log(answer.join('\n'));


const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

const N = +input.shift();
const stack = [];
const answer = [];

for (let i = 0; i < N; i++) {
  const [command, value] = input[i].split(' ').map(Number);

  switch (command) {
    case 1:
      stack.push(value);
      break;
    case 2:
      answer.push(stack.length ? stack.pop() : -1);
      break;
    case 3:
      answer.push(stack.length);
      break;
    case 4:
      answer.push(stack.length ? 0 : 1);
      break;
    case 5:
      answer.push(stack.length ? stack[stack.length - 1] : -1);
      break;
  }
}

console.log(answer.join('\n'));