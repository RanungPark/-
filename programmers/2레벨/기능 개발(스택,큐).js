function solution(progresses, speeds) {
  const queue = [];

  progresses.forEach((progress, i) => {
    day = Math.ceil((100 - progress) / speeds[i]);
    queue.push(day);
  });

  const result = [];
  let currentMaxDay = queue[0];
  let count = 1;

  for (let i = 1; i < queue.length; i++) {
    if (queue[i] <= currentMaxDay) {
      count++;
    } else {
      result.push(count);
      currentMaxDay = queue[i];
      count = 1;
    }
  }

  result.push(count);

  return result;
}
console.log(solution([93, 30, 55], [1, 30, 5]));
