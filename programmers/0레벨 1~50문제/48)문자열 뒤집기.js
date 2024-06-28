function solution(my_string, s, e) {
  const answer = [...my_string];
  const tmp = answer.slice(s, e + 1).reverse();
  answer.splice(s, tmp.length, ...tmp)

  return answer.join("");
}

// function solution(my_string, s, e) {
//   return my_string.slice(0, s) + my_string.slice(s, e+1).split("").reverse().join("") + my_string.slice(e+1);
// }