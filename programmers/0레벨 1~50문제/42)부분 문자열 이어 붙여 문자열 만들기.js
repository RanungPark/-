function solution(my_strings, parts) {
  let answer = '';
  my_strings.map((my_string, index) => {
    const [s, e] = parts[index];
    answer += my_string.slice(s, e + 1)
  })
  return answer;
}

// function solution(my_strings, parts) {
//   return parts.map(([s, e], i) => {
//       return my_strings[i].slice(s, e+1);
//   }).join("");
// }