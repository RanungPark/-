function solution(s) {
  console.log(s)
  const stack = [];

  for (c of s) {
    if (c === '(') {
      stack.push(c)
    } else {
      if (stack[stack.length - 1] === '(') {
        stack.pop()
      } else return false
    }
  }


  console.log(stack)

  if (stack.length === 0) return true;
  else return false;
}