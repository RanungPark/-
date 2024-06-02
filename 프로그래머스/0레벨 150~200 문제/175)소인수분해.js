function solution(n) {
  let arr;
  let length;

  if (n > 100) {
    length = 102;
    arr = Array(102).fill(1);
  } else if (n <= 100) {
    length = n + 1;
    arr = Array(n + 1).fill(1);
  }

  arr[0] = arr[1] = 0;

  for (let i = 2; i <= length; i++) {
    if (arr[i] === 0) continue;
    for (let j = i + i; j <= length; j += i) {
      arr[j] = 0
    }
  }

  arr = arr.map((v, i) => { if (v) return i });
  arr = arr.filter(v => v !== undefined);

  let num = n
  const result = []
  let i = 0

  while (num !== 1) {
    if (Number.isInteger(num / arr[i])) {
      result.push(arr[i]);
      num = num / arr[i];
    } else if (!(Number.isInteger(num / arr[i]))) {
      i++
    }
  }

  return [...new Set(result)]
}

//시간초과 5개ㅜㅜ , 소수를 찾고있었네ㅜ 그냥 2부터 올라가면서 나머지 0인거 찾으면 되는데...

function solution(n) {
  let answer = [];

  // 소인수분해하기
  let i = 2;
  while(i <= n){
    if (n % i === 0){
      answer.push(i);
      n /= i;
      i = 2;
    } else {
      i++;
    }
  }
  // 중복 값 제거하기
  answer = [...new Set(answer)];
  
  return answer;
}