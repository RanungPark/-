const fs = require('fs');
const input = Number(fs.readFileSync('../input.txt').toString().trim());

const solution = money => {
  let restMoney = money;
  if (restMoney === 1 || restMoney === 3) return -1;

  let divideBy5 = Math.floor(restMoney / 5);
  restMoney = restMoney % 5;

  if (restMoney % 2 === 1) {
    divideBy5 -= 1;
    restMoney += 5;
  }

  const divideBy2 = restMoney / 2;
  return divideBy2 + divideBy5;
};

console.log(solution(input));
