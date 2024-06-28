function solution(my_string, is_prefix) {
  const answer = [];
  for (let i = 1; i < my_string.length; i++) {
    answer.push(my_string.slice(0, i))
  }
  return +(answer.includes(is_prefix));
}