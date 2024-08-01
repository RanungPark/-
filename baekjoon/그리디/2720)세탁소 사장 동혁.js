const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

const T = +input.shift();
const answer = Array.from({ length: T }, () =>
  Array.from({ length: 4 }, () => 0)
);

const money = [25, 10, 5, 1];

for (let i = 0; i < T; i++) {
  let currMoney = input[i];

  for (let j = 0; j < 4; j++) {
    answer[i][j] = Math.floor(currMoney / money[j]);
    currMoney = currMoney - answer[i][j] * money[j];
  }
}

for(const line of answer) {
  console.log(line.join(' '))
}
