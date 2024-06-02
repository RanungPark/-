function solution(my_string, overwrite_string, s) {
  let answer = '';
  for (i = 0; i < s; i++) {
    answer += my_string[i]
  }
  answer += overwrite_string;
  for (i = s + overwrite_string.length; i < my_string.length; i++) {
    answer += my_string[i]
  }
  return answer;
}

// function solution(my_string, overwrite_string, s) {
//   let answer = '';
//   answer += my_string.slice(0, s); // 앞부분(0부터 s-1까지)
//   answer += overwrite_string;
//   answer += my_string.slice(answer.length); // 뒷부분
//   return answer;
// }