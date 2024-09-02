const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('');

let stack = [];
let mass = { H: 1, C: 12, O: 16 };

for (const char of input) {
  if (char === '(') {
    stack.push(char);
  } else if (char === ')') {
    let tempMass = 0;
    while (stack.length > 0) {
      let top = stack.pop();
      if (top === '(') break;
      tempMass += top;
    }
    stack.push(tempMass);
  } else if (char >= '2' && char <= '9') {
    let top = stack.pop();
    stack.push(top * parseInt(char));
  } else {
    stack.push(mass[char]);
  }
}

let totalMass = stack.reduce((acc, cur) => acc + cur, 0);
console.log(totalMass);