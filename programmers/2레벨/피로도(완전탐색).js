function solution(k, dungeons) {
  return quest(k, dungeons);
}

function quest(k, dungeons, count = 0, maxCount = { value: 0 }) {
  if (k < 0) return;

  maxCount.value = Math.max(maxCount.value, count);

  for (let i = 0; i < dungeons.length; i++) {
    const [required, cost] = dungeons[i];

    if (k >= required) {
      const remainingDungeons = [
        ...dungeons.slice(0, i),
        ...dungeons.slice(i + 1),
      ];
      quest(k - cost, remainingDungeons, count + 1, maxCount);
    }
  }

  return maxCount.value;
}

console.log(
  solution(80, [
    [80, 20],
    [50, 40],
    [30, 10],
  ])
);
