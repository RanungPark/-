const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

const N = +input.shift();

const times = input
  .map(v => v.split(' ').map(Number))
  .sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    } else {
      return a[1] - b[1];
    }
  });

let count = 0;
let prevTime = 0;
times.forEach(time => {
  if (time[0] >= prevTime) {
    prevTime = time[1];
    count++;
  }
});

console.log(count);
