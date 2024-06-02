function solution(hp) {
  let 장군, 병정, 일반

  let 나머지 = hp

  장군 = Math.floor(나머지 / 5)
  나머지 = 나머지 - 장군 * 5
  병정 = Math.floor(나머지 / 3)
  나머지 = 나머지 - 병정 * 3
  일반 = 나머지

  return 장군 + 병정 + 일반
}