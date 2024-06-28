function solution(numLog) {
  let result = ''
  for (let i = 0; i < numLog.length-1; i++) {
      if(numLog[i+1] - numLog[i] === 1) result += 'w'
      else if(numLog[i+1] - numLog[i] === -1) result += 's'
      else if(numLog[i+1] - numLog[i] === 10) result += 'd'
      else if(numLog[i+1] - numLog[i] === -10) result += 'a'
  }
  return result;
}

// function solution(numLog) {
//   let answer = numLog.map((v, i) => {
//       if(i === 0) return "";
//       else if(numLog[i-1] + 1 === v) return "w";
//       else if(numLog[i-1] - 1 === v) return "s";
//       else if(numLog[i-1] + 10 === v) return "d";
//       else return "a";
//   }).join("");
//   return answer;
// }