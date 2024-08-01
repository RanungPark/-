const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

const N = +input.shift();
const seats = input.shift().split('');

const seatByS = seats.filter(v => v === 'S').length;
const seatByL = seats.filter(v => v === 'L').length / 2;

console.log(Math.min(N, 1 + seatByS + seatByL));
