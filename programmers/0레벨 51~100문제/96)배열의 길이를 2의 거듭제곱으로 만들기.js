function solution(arr) {
  const pow = Math.ceil(Math.log2(arr.length))
  return arr.length < 2 ** pow ? arr.concat(new Array(2 ** pow - arr.length).fill(0)) : arr
}

// function solution(arr) {
//   return [...arr, ...new Array(2**Math.ceil(Math.log2(arr.length))-arr.length).fill(0)];
// }