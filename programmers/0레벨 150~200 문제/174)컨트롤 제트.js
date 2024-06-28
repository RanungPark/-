function solution(s) {
  const arr = s.split(' ');
  let result = 0;

  arr.forEach((v, i) => {
    if (v === "Z") {
      result -= arr[i - 1]
    } else if (v !== "Z") {
      result += +v
    }
  })
  return result
}