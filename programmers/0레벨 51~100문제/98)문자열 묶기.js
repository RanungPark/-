function solution(strArr) {
  const result = new Array(strArr.length).fill(0)

  for (str of strArr) {
    result[str.length] += 1
  }

  result.sort((a, b) => b - a);
  return result[0]
}

// function solution(strArr) {
//   let sizeArr = strArr.map(v => v.length);
//   let countArr = new Array(Math.max(...sizeArr)).fill(0);
//   for(let i of sizeArr){
//       countArr[i-1]++;
//   }
//   return Math.max(...countArr);
// }