const fs = require('fs');
const input = fs
  .readFileSync('../input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(v => v.split(' ').map(Number));

input.pop();

const breaksArr = [];

for (const [L, P, V] of input) {
  let divideBy5 = Math.floor(V / P);
  let restBy5 = V % P;

  let breaks = divideBy5 * L + Math.min(L, restBy5);

  breaksArr.push(breaks);
}

breaksArr.forEach((breaks, i) => {
  console.log(`Case ${i + 1}: ${breaks}`);
});
