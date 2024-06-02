function solution(n, control) {
  for (i of control) {
    if (i === 'w') n += 1;
    else if (i === 's') n -= 1;
    else if (i === 'd') n += 10;
    else if (i === 'a') n -= 10;
  }
  return n
}

// function solution(n, control) {
//   let answer = [...control].reduce((acc, cur) => {
//       if(cur === "w") return acc+1;
//       else if(cur === "s") return acc-1;
//       else if(cur === "d") return acc+10;
//       else return acc-10;
//   }, n);
//   return answer;
// }