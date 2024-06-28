function solution(my_string, num1, num2) {
  const slice1 = [...my_string].slice(num1, num1 + 1).join('');
  const slice2 = [...my_string].slice(num2, num2 + 1).join('');
  let string = [...my_string];
  string[num1] = slice2
  string[num2] = slice1
  return string.join('')
}

// function solution(my_string, num1, num2) {
//   let answer = [...my_string];
//   answer[num1] = my_string[num2];
//   answer[num2] = my_string[num1];
//   return answer.join("");
// }

// 다른 풀이 : 구조 분해 할당 이용 가능
// [answer[num1], answer[num2]] = [answer[num2], answer[1]];