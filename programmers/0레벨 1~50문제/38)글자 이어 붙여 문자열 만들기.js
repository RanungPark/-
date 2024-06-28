function solution(my_string, index_list) {
  var answer = [];
  for (i of index_list) {
    answer.push(my_string[i])
  }

  return answer.join("")
}

// function solution(my_string, index_list) {
//   let answer = "";
//   for(let i of index_list) answer += my_string[i];
//   return answer;
// }