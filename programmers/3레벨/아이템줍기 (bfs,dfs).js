function solution(rectangle, characterX, characterY, itemX, itemY) {
  const map = Array.from({ length: 103 }, () => Array(103).fill(0));
  const visited = Array.from({ length: 103 }, () => Array(103).fill(false));
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  let doubleRectangle = rectangle.map(current =>
    current.map(point => point * 2)
  );

  for (const [x1, y1, x2, y2] of doubleRectangle) {
    for (let i = y1; i <= y2; i++) {
      for (let j = x1; j <= x2; j++) {
        if (j === x1 || j === x2 || i === y1 || i === y2) {
          if (map[j][i] === 1) {
            continue;
          } else {
            map[j][i] += 1;
          }
        } else {
          map[j][i] += 2;
        }
      }
    }
  }

  characterX *= 2;
  characterY *= 2;
  itemX *= 2;
  itemY *= 2;

  const q = [[characterX, characterY, 0]];
  visited[(characterX, characterY)] = true;

  while (q.length) {
    const [cx, cy, count] = q.shift();

    if (cx === itemX && cy === itemY) {
      return count / 2;
    }

    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [cx + dx[i], cy + dy[i]];

      if (nx < 0 || ny < 0 || nx >= 103 || ny >= 103) continue;
      if (!visited[nx][ny] && map[nx][ny] === 1) {
        visited[nx][ny] = true;
        q.push([nx, ny, count + 1]);
      }
    }
  }
}
