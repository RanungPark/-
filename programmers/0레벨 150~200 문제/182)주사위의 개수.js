function solution(box, n) {
  const [width, length, hight] = box.map(v => Math.floor(v / n));

  return width * length * hight
}