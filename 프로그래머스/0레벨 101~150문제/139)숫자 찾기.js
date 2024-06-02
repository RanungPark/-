function solution(num, k) {
  return [...num + ''].includes(k + '') ? [...num + ''].indexOf(k + '') + 1 : -1
}

// function solution(num, k) {
//   let arr = [...String(num)];
//   let answer = arr.indexOf(String(k)) === -1 ? -1 : arr.indexOf(String(k))+1;
//   return answer;
// }