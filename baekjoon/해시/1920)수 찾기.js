const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

const N = +input.shift();
const aArr = input.shift().split(' ').map(Number);
const M = +input.shift();
const bArr = input.shift().split(' ').map(Number);

const map = new Map();

for (const i in aArr) {
  map.set(aArr[i], 1);
}

for (const v of bArr) {
  console.log(+map.has(v));
}
