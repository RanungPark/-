const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('');

let parentheses = [];
let reverse = [];
const answer = [];

let open = false;

for (const value of input) {
  if (value === '<') {
    if (reverse.length) {
      answer.push(reverse.reverse().join(''));
      reverse = [];
    }
    open = true;
  } else if (value === '>') {
    open = false;
    parentheses.push(value);
    answer.push(parentheses.join(''));
    parentheses = [];
    continue;
  }

  if (open) {
    parentheses.push(value);
  } else {
    if (value === ' ') {
      answer.push(reverse.reverse().join(''));
      answer.push(value);
      reverse = [];
    } else {
      reverse.push(value);
    }
  }
}
if (reverse.length) {
  answer.push(reverse.reverse().join(''));
  reverse = [];
}

console.log(answer.join(''));
