function solution(my_string) {
  const [num1, op, num2] = my_string.split(' ');
  return op === '+' ? Number(num1) + Number(num2) : Number(num1) - Number(num2);
}

// function solution(my_string) {
// let arr = my_string.split(" ");
// let answer = +arr[0];
// for(let i=1; i<arr.length; i+=2){
//   switch(arr[i]){
//     case "+": answer = answer + +arr[i+1]; break;
//     case "-": answer = answer - +arr[i+1]; break;
//   }
// }
// return answer;
// }