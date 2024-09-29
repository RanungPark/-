class MinHeap {
  constructor() {
    this.heap = [];
  }

  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }

  getLeftIndex(i) {
    return i * 2 + 1;
  }

  getRightIndex(i) {
    return i * 2 + 2;
  }

  size() {
    return this.heap.length;
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    let parentIndex = this.getParentIndex(index);

    while (index > 0 && this.heap[parentIndex].time > this.heap[index].time) {
      this.swap(parentIndex, index);
      index = parentIndex;
      parentIndex = this.getParentIndex(index);
    }
  }

  remove() {
    if (this.heap.length === 1) return this.heap.pop();
    const minValue = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return minValue;
  }

  heapifyDown() {
    let index = 0;
    const length = this.heap.length;

    while (true) {
      const leftChildIndex = this.getLeftIndex(index);
      const rightChildIndex = this.getRightIndex(index);
      let swapIndex = null;

      if (leftChildIndex < length) {
        const leftChild = this.heap[leftChildIndex];
        if (leftChild.time < this.heap[index].time) {
          swapIndex = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        const rightChild = this.heap[rightChildIndex];
        if (
          (swapIndex !== null && rightChild.time < this.heap[swapIndex].time) ||
          (swapIndex === null && rightChild.time < this.heap[index].time)
        ) {
          swapIndex = rightChildIndex;
        }
      }

      if (swapIndex === null) break;
      this.swap(swapIndex, index);
      index = swapIndex;
    }
  }

  peek() {
    return this.heap[0];
  }
}

function solution(jobs) {
  jobs.sort((a, b) => a[0] - b[0]);
  const heap = new MinHeap();

  let time = 0;
  let totalTime = 0;
  let count = 0;
  let i = 0;

  while (count < jobs.length) {
    while (i < jobs.length && jobs[i][0] <= time) {
      heap.insert({ start: jobs[i][0], time: jobs[i][1] });
      i++;
    }

    if (heap.size() > 0) {
      const { start, time: duration } = heap.remove();
      time += duration;
      totalTime += time - start;
      count++;
    } else {
      time = jobs[i][0];
    }
  }

  return Math.floor(totalTime / jobs.length);
}

console.log(
  solution([
    [0, 3],
    [1, 9],
    [2, 6],
  ])
);
