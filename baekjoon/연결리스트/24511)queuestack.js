const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class Deque {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addValue(value) {
    const newNode = new Node(value);
    if (!this.tail) {
      this.head = this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  removeFront() {
    if (!this.head) return null;
    const value = this.head.value;
    this.head = this.head.next;
    if (this.head) {
      this.head.prev = null;
    } else {
      this.tail = null;
    }
    return value;
  }

  removeBack() {
    if (!this.tail) return null;
    const value = this.tail.value;
    this.tail = this.tail.prev;
    if (this.tail) {
      this.tail.next = null;
    } else {
      this.head = null;
    }
    return value;
  }
}

const N = +input[0];
const A = input[1].split(' ').map(Number);
const B = input[2].split(' ').map(Number);
const M = +input[3];
const C = input[4].split(' ').map(Number);
const answer = [];

const queuestack = Array.from({ length: N }, (_, i) => {
  const deque = new Deque();
  deque.addValue(B[i]);
  return deque;
});

for (let i = 0; i < M; i++) {
  let currValue = C[i];
  for (let j = 0; j < N; j++) {
    if (A[j] === 0) {
      queuestack[j].addValue(currValue);
      currValue = queuestack[j].removeFront();
    } else {
      queuestack[j].addValue(currValue);
      currValue = queuestack[j].removeBack();
    }
  }
  answer.push(currValue);
}

console.log(answer.join(' '))