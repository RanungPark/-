function solution(my_string) {
  const num = my_string.replace(/[^0-9]/g, '')
  return [...num].reduce((a, c) => a + +c, 0);
}