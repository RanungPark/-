function solution(my_string) {
  return [...my_string].map(v => {
    const ascii = v.charCodeAt()
    if (ascii >= 65 && ascii <= 90) {
      return v.toLowerCase()
    } else if (ascii >= 97 && ascii <= 122) {
      return v.toUpperCase()
    }
  }).join('')
}

// a-97 z-122 A-65 Z-90

// function solution(my_string) {
//   let answer = "";
//   for(let i of my_string){
//     if(i === i.toUpperCase()){
//       answer += i.toLowerCase();
//     } else {
//       answer += i.toUpperCase();
//     }
//   }
//   return answer;
// }

// 다른 풀이 : map 사용
// function solution(my_string) {
//   let answer = [...my_string].map(v => v === v.toUpperCase() ? v.toLowerCase() : v.toUpperCase()).join("");
//   return answer;
// }