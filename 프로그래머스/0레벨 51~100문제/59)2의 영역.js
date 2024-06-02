function solution(arr) {
  const index = []
  const answer = [];

  arr.map((v, i) => {
    if (v === 2) {
      index.push(i)
    }
  })

  console.log(index.length)
  if (index.length === 0) {
    answer.push(-1);
  } else if (index.length === 1) {
    answer.push(arr[index[0]])
  } else {
    return arr.slice(index[0], index[index.length - 1] + 1)
  }
  return answer
}

// function solution(arr) {
//   const start = arr.indexOf(2);
//   const end = arr.lastIndexOf(2);
  
//   return start === -1 ? [-1] : arr.slice(start, end+1);
// }