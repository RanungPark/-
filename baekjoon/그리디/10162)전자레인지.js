const fs = require('fs');
const input = Number(fs.readFileSync('../input.txt').toString().trim());

const time = [5 * 60, 1 * 60, 10];

let currTime = input;
const answer = Array.from({ length: 3 }, () => 0);

for (let i = 0; i < 3; i++) {
  answer[i] = Math.floor(currTime / time[i]);
  currTime = currTime - answer[i] * time[i];
}

if (currTime !== 0) console.log(-1);
else console.log(answer.join(' '));
