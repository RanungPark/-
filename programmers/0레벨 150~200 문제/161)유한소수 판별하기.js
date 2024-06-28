function solution(a, b) {
  const min = Math.min(a, b);

  let divisor = 0
  for (let i = 1; i <= min; i++) {
    if (a % i === 0 && b % i === 0) divisor = i
  }

  let all_decimal = [];
  const decimal = [];

  if (divisor !== 1) {
    a = a / divisor
    b = b / divisor
  }

  all_decimal = Array(b + 1).fill(1);
  all_decimal[0] = all_decimal[1] = 0;
  for (let i = 2; i < b + 1; i++) {
    if (all_decimal[i] === 0) continue
    for (let j = i + i; j < b + 1; j += i) {
      all_decimal[j] = 0
    }
    if (b % i === 0) decimal.push(i)
  }

  if (decimal.length === 1) {
    return decimal[0] === 2 || decimal[0] === 5 ? 1 : 2;
  } else {
    return decimal.reduce((a, b) => a + b) === 7 ? 1 : 2;
  }
}
// 두개에서 런타임 에러가 뜸

function solution(a, b) {
	return Number((a/b).toFixed(10)) === a/b ? 1 : 2
}
