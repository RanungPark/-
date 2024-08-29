function solution(priorities, location) {
  const queue = [];

  priorities.forEach((priority, i) => {
    queue.push([priority, i]);
  });

  priorities.sort((a, b) => b - a);

  let count = 0;

  while (1) {
    const currentValue = queue.shift();
    if (currentValue[0] < priorities[count]) {
      queue.push(currentValue);
    } else {
      count += 1;
      if (location === currentValue[1]) {
        return count;
      }
    }
  }
}

console.log(solution([2, 1, 3, 2], 2));


function solution(priorities, location) {
  let queue = priorities.map((priority, index) => ({priority, index})); // 프로세스 우선순위와 인덱스를 객체로 저장
  let order = 0; // 실행된 프로세스의 순서를 저장

  while (queue.length > 0) {
      // 큐에서 첫 번째 프로세스를 꺼냅니다.
      let current = queue.shift();
      // 큐에 현재 프로세스보다 높은 우선순위가 있는지 확인합니다.
      if (queue.some(process => process.priority > current.priority)) {
          // 높은 우선순위가 있다면 현재 프로세스를 다시 큐에 넣습니다.
          queue.push(current);
      } else {
          // 그렇지 않으면 프로세스를 실행합니다.
          order++;
          // 실행된 프로세스가 찾고자 하는 프로세스(location)인지 확인합니다.
          if (current.index === location) {
              return order; // 몇 번째로 실행되었는지 반환
          }
      }
  }
}