function solution(arr, intervals) {
  const [interval1, interval2] = intervals;
  const arr1 = arr.slice(interval1[0], interval1[1] + 1)
  const arr2 = arr.slice(interval2[0], interval2[1] + 1)
  return [...arr1, ...arr2]
}

// function solution(arr, intervals) {
//   const [[a1, b1], [a2, b2]] = intervals;
//   return arr.slice(a1, b1+1).concat(arr.slice(a2, b2+1));
// }