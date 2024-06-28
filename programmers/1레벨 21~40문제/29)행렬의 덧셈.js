function solution(arr1, arr2) {
  let arr = [];
  for (const arr_i in arr1) {
    arr[arr_i] = [];
    for (const i in arr1[arr_i]) {
      arr[arr_i][i] = arr1[arr_i][i] + arr2[arr_i][i];
    }
  }
  return arr;
}

function solution(arr1, arr2) {
  const answer = arr1.map((rows, rowIdx) => rows.map((num, colIdx) => num + arr2[rowIdx][colIdx]))
  return answer;
}