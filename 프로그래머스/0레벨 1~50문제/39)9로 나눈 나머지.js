function solution(number) {
  let sum = 0;
  for (num of [...number]) {
    sum += +num;
  }

  return (sum % 9)
}

// function solution(number) {
//   return [...number].reduce((acc, cur) => acc + +cur, 0) % 9;
// }