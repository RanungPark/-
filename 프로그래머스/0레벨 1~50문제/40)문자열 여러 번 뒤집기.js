function solution(my_string, queries) {
  let tmp = []

  const result = [...my_string]
  for ([i, j] of queries) {
    tmp = result.slice(i, j + 1).reverse();
    result.splice(i, tmp.length, ...tmp);
    tmp = []
  }

  return (result.join(''))
}

// function solution(my_string, queries) {
//   let tmp = [];
//   my_string = my_string.split("");
//   queries.forEach(([start, end]) => {
//       tmp = my_string.slice(start, end + 1).reverse();
//       my_string.splice(start, tmp.length, ...tmp);
//       tmp = [];
//   });
//   return my_string.join("");
// }