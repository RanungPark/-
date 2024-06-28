function solution(num_list) {
  if (num_list.length >= 11) {
    return num_list.reduce((a, c) => a + c);
  } else {
    return num_list.reduce((a, c) => a * c);
  }
}

function solution(num_list) {
  return num_list.reduce((acc, cur) => num_list.length >= 11 ? acc+cur : acc*cur);
}