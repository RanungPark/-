function solution(n, arr1, arr2) {
  let tmp = Array.from({ length: n }, () => Array(n).fill(0))
  const arrOfArr1 = [];
  const arrOfArr2 = [];

  for (const arr of arr1) {
    if (arr.toString(2).length !== n) {
      arrOfArr1.push([...arr.toString(2).padStart(n, 0)])
    } else arrOfArr1.push([...arr.toString(2)])
  }

  for (const arr of arr2) {
    if (arr.toString(2).length !== n) {
      arrOfArr2.push([...arr.toString(2).padStart(n, 0)])
    } else arrOfArr2.push([...arr.toString(2)])
  }

  const answer = []
  for (const i in tmp) {
    for (const j in tmp[i]) {
      if (arrOfArr1[i][j] + arrOfArr2[i][j] > 0) {
        tmp[i][j] = "#"
      } else tmp[i][j] = " "
    }
    answer[i] = tmp[i].join('')
  }

  return answer;
}