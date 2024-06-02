function solution(quiz) {
  const answer = [];
  for (const quiz_value of quiz) {
    const [num1, op, num2, , value] = quiz_value.split(' ')
    if (op === '-') {
      +num1 - +num2 === +value ? answer.push('O') : answer.push('X');
    } else if (op === '+') {
      +num1 + +num2 === +value ? answer.push('O') : answer.push('X');
    }
  }
  return answer;
}