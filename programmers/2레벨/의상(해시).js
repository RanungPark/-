function solution(clothes) {
  const map = new Map();
  let count = 1;

  for (const [name, kind] of clothes) {
    if (map.has(kind)) {
      map.set(kind, map.get(kind) + 1);
    } else map.set(kind, 1);
  }

  map.forEach(v => {
    console.log(v);
    count *= v + 1;
  });

  return count - 1;
}

solution([
  ['yellow_hat', 'headgear'],
  ['blue_sunglasses', 'eyewear'],
  ['green_turban', 'headgear'],
]);
