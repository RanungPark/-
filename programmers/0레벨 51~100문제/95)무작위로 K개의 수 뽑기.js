function solution(arr, k) {
  let result = [...new Set(arr)];
  if (result.length < k) {
    result = result.concat(new Array(k - result.length).fill(-1));
  } else if (result.length >= k) {
    result = result.slice(0, k);
  }
  return result
}