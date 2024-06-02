function solution(dot) {
  const [x, y] = dot.map(v => Math.sign(v));

  if (x === 1 && y === 1) return 1;
  else if (x === -1 && y === 1) return 2;
  else if (x === -1 && y === -1) return 3;
  else if (x === 1 && y === -1) return 4;
}