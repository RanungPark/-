function solution(bridge_length, weight, truck_weights) {
  const bridge = Array.from({ length: bridge_length }).fill(0);
  let time = 0;
  let currWeight = 0;
  const queue = [...truck_weights];

  while (queue.length > 0 || currWeight > 0) {
    time += 1;

    let outTruck = bridge.shift();
    currWeight -= outTruck;

    if (queue.length > 0) {
      if (currWeight + queue[0] <= weight) {
        let inTruck = queue.shift();
        bridge.push(inTruck);
        currWeight += inTruck;
      } else {
        bridge.push(0);
      }
    }
  }
  return time;
}

console.log(solution(100, 100, [10]));
