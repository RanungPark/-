function solution(keyinput, board) {
  const x = Math.floor(board[0] / 2), y = Math.floor(board[1] / 2)

  const map = [x, -x, y, -y]
  let user = [0, 0]

  for (const key of keyinput) {
    if (key === 'right') {
      if (user[0] === map[0]) continue;
      else user[0] += 1;
    } else if (key === 'left') {
      if (user[0] === map[1]) continue;
      else user[0] -= 1;
    } else if (key === 'up') {
      if (user[1] === map[2]) continue;
      else user[1] += 1;
    } else if (key === 'down') {
      if (user[1] === map[3]) continue;
      else user[1] -= 1;
    }
  }

  return user
}