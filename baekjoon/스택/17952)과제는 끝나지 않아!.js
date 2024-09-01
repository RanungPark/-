const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

const N = +input.shift();
const stack = [];
let totalScore = 0;

for (let i = 0; i < N; i++) {
  const [command, score, time] = input[i].split(' ').map(Number);

  if (command === 1) {
    stack.push([score, time]);
  }

  if (stack.length > 0) {
    let [currScore, currTime] = stack.pop();
    currTime--;
    if (currTime === 0) {
      totalScore += currScore;
    } else {
      stack.push([currScore, currTime]);
    }
  }
}

console.log(totalScore);
