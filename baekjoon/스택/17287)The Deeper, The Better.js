const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('');

const sStack = [];
const mStack = [];
const lStack = [];
let answer = 0;

for (let value of input) {
  if (value === '(') {
    sStack.push(value);
  } else if (value === '{') {
    mStack.push(value);
  } else if (value === '[') {
    lStack.push(value);
  } else if (value === ')') {
    if (!sStack.length) {
      break;
    }
    sStack.pop();
  } else if (value === '}') {
    if (!mStack.length) {
      break;
    }
    mStack.pop();
  } else if (value === ']') {
    if (!lStack.length) {
      break;
    }
    lStack.pop();
  }
  if (!isNaN(+value)) {
    const stackNum = sStack.length + mStack.length * 2 + lStack.length * 3;
    answer = Math.max(answer, stackNum);
  }
}

console.log(answer);


const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('');

const stack = [];
let maxScore = 0;

for (let value of input) {
  if (value === '(') {
    stack.push(1);  // 소괄호의 가중치 1
  } else if (value === '{') {
    stack.push(2);  // 중괄호의 가중치 2
  } else if (value === '[') {
    stack.push(3);  // 대괄호의 가중치 3
  } else if (value === ')') {
    if (stack.length === 0 || stack[stack.length - 1] !== 1) break;  // 잘못된 괄호
    stack.pop();
  } else if (value === '}') {
    if (stack.length === 0 || stack[stack.length - 1] !== 2) break;  // 잘못된 괄호
    stack.pop();
  } else if (value === ']') {
    if (stack.length === 0 || stack[stack.length - 1] !== 3) break;  // 잘못된 괄호
    stack.pop();
  } else if (!isNaN(+value)) {
    // 현재 스택의 모든 가중치를 합산하여 점수 계산
    const currentScore = stack.reduce((acc, curr) => acc + curr, 0);
    maxScore = Math.max(maxScore, currentScore);
  }
}

console.log(maxScore);