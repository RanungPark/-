function solution(intStrs, k, s, l) {
  const result = [];
  for (intStr of intStrs) {
    const tmp = intStr.slice(s, s + l)
    if (k < tmp) result.push(+tmp)
  }

  return result
}

// function solution(intStrs, k, s, l) {
//   let answer = intStrs.reduce((acc, cur) => {
//       const v = +cur.slice(s, s+l);
//       if(v > k) acc.push(v);
//       return acc;
//   }, []);
//   return answer;
// }