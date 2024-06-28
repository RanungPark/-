function solution(arr1, arr2) {
  let result
  if (arr1.length === arr2.length) {
    if (arr1.reduce((a, c) => a + c) === arr2.reduce((a, c) => a + c)) result = 0
    else {
      arr1.reduce((a, c) => a + c) > arr2.reduce((a, c) => a + c) ? result = 1 : result = -1
    };
  } else {
    arr1.length > arr2.length ? result = 1 : result = -1;
  }
  return result
}
