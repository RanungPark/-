function solution(numlist, n) {
  const num_array = [];
  for (const num of numlist) {
    num_array.push({
      num,
      abs: Math.abs(n - num)
    })
  };

  num_array.sort((a, b) => b.num - a.num);
  num_array.sort((a, b) => a.abs - b.abs);

  const result = [];
  for (const v of num_array) {
    const { num } = v;
    result.push(num);
  };

  return result
}