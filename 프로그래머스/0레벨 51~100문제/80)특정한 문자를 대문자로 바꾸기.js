function solution(my_string, alp) {
  var answer = [...my_string];
  return answer.map(v => {
    if (v === alp) {
      return v.toUpperCase()
    } else return v
  }).join('');
}

// function solution(my_string, alp) {
//   return [...my_string].map(v => v === alp ? v.toUpperCase() : v).join("");
// }