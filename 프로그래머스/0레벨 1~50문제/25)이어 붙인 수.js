function solution(num_list) {
  let odd = '';
  let even = '';
  
  for(let i = 0; i < num_list.length; i++) {
      if(num_list[i] % 2 === 0) even += num_list[i]
      else odd += num_list[i]
  }
  return +odd + +even
}

// function solution(num_list) {
//   let oddSum = "";
//   let evenSum = "";
//   for(let i of num_list){
//       if(i%2 === 0) evenSum += i+"";
//       else oddSum += i+"";
//   }
//   return +evenSum + +oddSum;
// }