function solution(num_list) {
  let sum = 0;
  let mul = 1;
  for(let i = 0; i < num_list.length; i++) {
      sum += num_list[i]
      mul *= num_list[i]
  }
  
  if(sum ** 2 < mul) return 0
  else return 1
}

// function solution(num_list) {
//   const sum = num_list.reduce((a, c) => a + c, 0);
//   const mul = num_list.reduce((a, c) => a * c, 1);
//   if(sum**2 > mul) return 1;
//   else return 0;
// }