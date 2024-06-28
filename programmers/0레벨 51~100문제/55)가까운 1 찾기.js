function solution(arr, idx) {
  for (let i = idx; i < arr.length; i++) {
    if (arr[i] === 1) {
      return i
    }
  }
  return -1;
}

// function solution(arr, idx) {
//   return arr.indexOf(1, idx);
//   // indexOf의 두번째 인자는 검색을 시작할 인덱스이다 ;_;
// }