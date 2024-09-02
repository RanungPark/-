const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

const N = +input.shift();
const queue = input.shift().split(' ').map(Number);
const stack = [];
let currNum = 1;

const solution = () => {
  while (queue.length || stack.length) {
    if (queue.length && queue[0] === currNum) {
      // 큐의 맨 앞에 있는 학생이 현재 번호(currNum)와 일치하는 경우
      queue.shift(); // 큐에서 제거하고
      currNum++; // 다음 번호로 증가
    } else if (stack.length && stack[stack.length - 1] === currNum) {
      // 스택의 맨 위에 있는 학생이 현재 번호(currNum)와 일치하는 경우
      stack.pop(); // 스택에서 제거하고
      currNum++; // 다음 번호로 증가
    } else if (queue.length) {
      // 위의 두 조건에 맞지 않는 경우, 큐에서 스택으로 이동
      stack.push(queue.shift());
    } else {
      // 더 이상 이동할 수 없고, 번호가 맞지 않으면 'Sad' 반환
      return 'Sad';
    }
  }

  // 모든 학생들이 순서대로 간식을 받았다면 'Nice' 반환
  return 'Nice';
};


console.log(solution());
