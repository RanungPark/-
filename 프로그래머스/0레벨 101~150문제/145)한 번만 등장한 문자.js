function solution(s) {
  const object = []
  
  for(const v of [...s]) {
      const foundObject = object.find(obj => obj.key === v);

      if (foundObject === undefined) {
          object.push({ key: v, count: 1 });
      } else {
          foundObject.count += 1;
      }
  }
  const filterObject = object.filter(v => v.count === 1)
  const result = []
  filterObject.forEach(v => result.push(v.key))
  
  return result.sort().join('')
}

// function solution(s) {
//   let array = s.split("").sort(); // 오름차순 문자열
//   for(let i=0; i<array.length; i++){
//     if(array[i] === array[i+1]){
//       let n = 1;
//       while(array[i] === array[i+n]){
//         n++;
//       }
//       array.splice(i, n);
//       i--;
//     }
//   }
//   return array.join("");
// }

// 더 좋은 풀이 : indexOf === lastIndexOf 활용해서 한 번만 등장한 문자 정확하게 찾아내기
// function solution(s) {
//   let answer = [];
//   for (let i of s){
//     if (s.indexOf(i) === s.lastIndexOf(i)){
//       answer.push(i);
//       // console.log(answer);
//     }
//   }
//   return answer.sort().join('');
// }