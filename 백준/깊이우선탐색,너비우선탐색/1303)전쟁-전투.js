const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const map = input.map(v => v.split(''));
const visited = Array.from(Array(N), () => Array(M).fill(false));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
const blueArea = [];
const whiteArea = [];

let bCount = 0;
let wCount = 0;

const dfs = (x, y, word) => {
  visited[x][y] = true;
  word === 'W' ? (wCount = wCount + 1) : (bCount = bCount + 1);

  for (let i = 0; i < 4; i++) {
    const [nx, ny] = [x + dx[i], y + dy[i]];
    if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;
    if (!visited[nx][ny] && map[nx][ny] === word) {
      dfs(nx, ny, word);
    }
  }
};

for (i = 0; i < N; i++) {
  for (j = 0; j < M; j++) {
    if (!visited[i][j]) {
      if (map[i][j] === 'W') {
        dfs(i, j, 'W');
        whiteArea.push(wCount);
        wCount = 0;
      } else if (map[i][j] === 'B') {
        dfs(i, j, 'B');
        blueArea.push(bCount);
        bCount = 0;
      }
    }
  }
}

const blueAnswer = blueArea.map(v => v * v).reduce((ac, cu) => ac + cu, 0);
const whiteAnswer = whiteArea.map(v => v * v).reduce((ac, cu) => ac + cu, 0);
console.log(whiteAnswer, blueAnswer);

// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
// const [N,M] = input.shift().split(' ').map(v => +v);
// const graph = Array.from({length: M}).map(() => []);
// for(let i=0; i<M; i++){
//     graph[i] = input[i].split('')
// }
// const visited = Array.from({length: M}).map(() => new Array(N).fill(false));

// const dx = [-1,1,0,0];
// const dy = [0,0,-1,1];

// let tempW = 0;
// let tempB = 0;
// function dfs(y, x, soldier){
//    visited[y][x] = true;
//    if(soldier === 'W') tempW++;
//    else if(soldier === 'B') tempB++;

//     for(let i=0; i<4; i++){
//         let nx = x + dx[i];
//         let ny = y + dy[i];
//         if(nx < 0 || ny < 0 || nx >= N || ny >= M) continue;
//         if(!visited[ny][nx] && graph[ny][nx] === soldier){
//                  dfs(ny, nx, soldier)
//         }
//     }
// }

// let white = 0;
// let blue = 0;

// for(let i=0; i<M; i++){
//     for(let j=0; j<N; j++){
//         if(!visited[i][j]){
//             if(graph[i][j] === 'W'){
//                 dfs(i,j, 'W')
//                 white += (tempW* tempW)
//                 tempW = 0;
//             }else if(graph[i][j] === 'B'){
//                 dfs(i,j, 'B')
//                 blue += (tempB * tempB)
//                 tempB = 0;
//                      }
//         }
//     }
// }
// console.log(white, blue)
