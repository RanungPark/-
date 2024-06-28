function solution(order) {
  let result = 0;
  for (const v of order) {
    if (v.includes('cafelatte')) {
      result += 5000;
    } else if (v.includes('americano') || v.includes('anything')) {
      result += 4500;
    }
  }

  return result;
}