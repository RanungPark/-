function solution(brown, yellow) {
  const yellowArr = [];

  for (let i = 0; i <= Math.sqrt(yellow); i++) {
    if (yellow % i === 0) yellowArr.push([yellow / i, i]);
  }

  const [result] = yellowArr.filter(
    ([col, row]) => col * 2 + (row + 2) * 2 === brown
  );

  return [result[0] + 2, result[1] + 2];
}

console.log(solution(24, 24));

