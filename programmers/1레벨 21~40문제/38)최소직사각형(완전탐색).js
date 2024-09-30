function solution(sizes) {
  sizes.map(v => v.sort((a, b) => b - a));
  let maxCol, maxRow;
  sizes.forEach(([col, row]) => {
    maxCol = maxCol > col ? maxCol : col;
    maxRow = maxRow > row ? maxRow : row;
  });

  return maxCol * maxRow;
}

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
);
