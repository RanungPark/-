function solution(num) {
  let result = 0
  let tmp = num;
  if (num === 1) return 0

  while (1) {
    result++
    if (tmp % 2 === 0) {
      tmp = tmp / 2
    } else if (tmp % 2 === 1) {
      tmp = tmp * 3 + 1
    }
    if (result === 500) {
      return -1;
    }
    if (tmp === 1) {
      return result;
    }
  }

}