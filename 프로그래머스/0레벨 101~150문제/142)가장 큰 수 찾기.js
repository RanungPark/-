function solution(array) {
  let result = [0, 0]
  array.forEach((v, i) => {
    if (result[0] < v) {
      result = [v, i]
    }
  })
  return result
}

// function solution(array) {
//   let max = [...array].sort((a,b) => b-a)[0];
//   let answer = [max, array.indexOf(max)];
//   return answer;
// }

// 다른 풀이 : 전개연산자 + Math.max 이용
// function solution(array) {
//   let max = Math.max(...array);
// 	let answer = [max, array.indexOf(max)];
//   return answer;
// }