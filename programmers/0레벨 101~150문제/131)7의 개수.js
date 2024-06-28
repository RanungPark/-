function solution(array) {
  let answer = 0;
  for(const value of array) {
      for(const v of [...value+'']) {
          if(+v === 7) answer++
      }
  }
  return answer
}