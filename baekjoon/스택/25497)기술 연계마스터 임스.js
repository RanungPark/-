const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

const N = +input.shift();
const skills = input.shift().split('');

const LRstack = [];
const SKstack = [];

let count = 0;
for (const skill of skills) {
  if (+skill >= 1 && +skill <= 9) count++;
  else if (skill === 'L') {
    LRstack.push(skill);
  } else if (skill === 'S') {
    SKstack.push(skill);
  } else if (skill === 'R') {
    if (!LRstack.length) {
      break;
    }
    LRstack.pop();
    count++;
  } else if (skill === 'K') {
    if (!SKstack.length) {
      break;
    }
    SKstack.pop();
    count++;
  }
}
console.log(count);
