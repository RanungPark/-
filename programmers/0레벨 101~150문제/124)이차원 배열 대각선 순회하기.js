function solution(board, k) {
  let num = 0
  for (const i in board) {
    for (const j in board[i]) {
      if (+i + +j <= k) {
        num += board[i][j]
      }
    }
  }
  return num
}

// function solution(board, k) {
//   return board.reduce((sum, row, i) => {
//       return sum + row.reduce((rowSum, column, j) => {
//           return i+j <= k ? rowSum + column : rowSum;
//       }, 0);
//   }, 0);
// }