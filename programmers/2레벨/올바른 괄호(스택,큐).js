function solution(s) {
  const arr = s.split('');
  const stack = [];

  if (!arr.includes('(') || !arr.includes(')')) {
    return false;
  }

  for (let v of arr) {
    if (v === '(') {
      stack.push(v);
    } else if (v === ')') {
      if (!stack.length) {
        return false;
      }
      stack.pop();
    }
  }

  return stack.length === 0;
}
console.log(solution('()()'));
console.log(solution('))'));
console.log(solution(')('));
console.log(solution(''));
console.log(solution('(('));
console.log(solution('(())()'));
console.log(solution(')()('));
console.log(solution('(()('));
