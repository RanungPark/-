class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }

  getLeftInedx(i) {
    return 2 * i + 1;
  }

  getRightInedx(i) {
    return 2 * i + 2;
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  peek() {
    return this.heap[0];
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.size() - 1;
    let parentIndex = this.getParentIndex(index);

    while (index > 0 && this.heap[parentIndex] > this.heap[index]) {
      this.swap(parentIndex, index);
      index = parentIndex;
      parentIndex = this.getParentIndex(index);
    }
  }

  remove() {
    if (this.heap.length === 1) return this.heap.pop();
    const minValue = this.peek();
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return minValue;
  }

  heapifyDown() {
    let index = 0;
    const length = this.size();

    while (true) {
      const leftChildIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);
      const element = this.heap[index];
      let leftChild, rightChild;
      let swapIndex = null;

      if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex];
        if (leftChild < element) {
          swapIndex = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex];
        if (
          (swapIndex === null && rightChild < element) ||
          (swapIndex !== null && rightChild < leftChild)
        ) {
          swapIndex = rightChildIndex;
        }
      }

      if (swapIndex === null) break;
      this.swap(swapIndex, index);
      index = swapIndex;
    }
  }
}

class MaxHeap extends MinHeap {
  constructor() {
    super();
  }

  heapifyUp() {
    let index = this.size() - 1;
    let parentIndex = this.getParentIndex(index);

    while (index > 0 && this.heap[parentIndex] < this.heap[index]) {
      this.swap(index, parentIndex);
      index = parentIndex;
      parentIndex = this.getParentIndex(index);
    }
  }

  heapifyDown() {
    let index = 0;
    const length = this.size();

    while (true) {
      const leftChildIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);
      const element = this.heap[index];
      let leftChild, rightChild;
      let swapIndex = null;

      if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex];
        if (leftChild > element) {
          swapIndex = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex];
        if (
          (swapIndex === null && rightChild > element) ||
          (swapIndex !== null && rightChild > leftChild)
        ) {
          swapIndex = rightChildIndex;
        }
      }

      if (swapIndex === null) break;
      this.swap(swapIndex, index);
      index = swapIndex;
    }
  }
}
