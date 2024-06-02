function solution(a, b, c, d) {
  const answer = [a, b, c, d];
  answer.sort((a, b) => a - b);
  
  const set = new Set([a, b, c, d]);

  if (set.size === 1) {
    return 1111 * a;
  } else if (set.size === 2) {
    if (answer[1] === answer[2]) {
      if (answer[0] !== answer[1]) {
        return (10 * answer[1] + answer[0]) ** 2
      } else if (answer[2] !== answer[3]) {
        return (10 * answer[2] + answer[3]) ** 2
      }
    } else {
      return (answer[0] + answer[2]) * Math.abs(answer[0] - answer[2])
    }
  } else if (set.size === 3) {
    const result = [];
    for (let i = 0; i < answer.length; i++) {
      if (i === 0 || answer[i - 1] !== answer[i]) {
        result.push(answer[i]);
      } else {
        result.pop()
      }
    }
    return result[0] * result[1];
  } else {
    return answer[0];
  }
}

// function solution(a, b, c, d) {
//   let [i, j, k, l] = [a, b, c, d].sort(); // 오름차순 정렬
  
//   if(i === l) return 1111*i;
//   else if(i === k && i !== l) return (10*i+l)**2;
//   else if(i !== j && j === l) return (10*j+i)**2;
//   else if(i === j && j !== k && k === l) return (i+k)*Math.abs(i-k);
//   else if(i === j && j !== k && k !== l) return k*l;
//   else if(i !== j && j === k && k !== l) return i*l;
//   else if(i !== j && j !== k && k === l) return i*j;
//   else return i;
// }