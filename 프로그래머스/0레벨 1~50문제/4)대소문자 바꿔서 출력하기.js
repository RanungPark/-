const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input = [line];
}).on('close', function () {
  str = input[0];
  let a = []
  for (i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      a.push(str[i].toLowerCase());
    } else {
      a.push(str[i].toUpperCase());
    }
  }
  console.log(a.join(''))
});

// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// let input = [];

// rl.on('line', function (line) {
//     input = [line];
// }).on('close',function(){
//     str = input[0];
//     let answer = "";
//     for(let i of str){
//         if(i.toUpperCase() === i) answer += i.toLowerCase();
//         else answer += i.toUpperCase();
//     }
//     console.log(answer);
// });