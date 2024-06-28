function solution(dots) {
  const x_arr = [];
  const y_arr = [];
  dots.forEach(v => {
    const [x, y] = v;
    x_arr.push(x);
    y_arr.push(y);
  })
  x_arr.sort();
  y_arr.sort();
  return Math.abs(x_arr[3] - x_arr[0]) * Math.abs(y_arr[3] - y_arr[0])
}
