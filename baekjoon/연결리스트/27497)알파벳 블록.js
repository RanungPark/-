const fs = require('fs');
const input = fs.readFileSync('../input.txt').toString().trim().split('\n');

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class Deque {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  pushFront(value) {
    const newNode = new Node(value);
    if (this.size === 0) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.size++;
  }

  pushBack(value) {
    const newNode = new Node(value);
    if (this.size === 0) {
      this.head = this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  popFront() {
    if (this.size === 0) return;
    if (this.size === 1) {
      this.head = this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    this.size--;
  }

  popBack() {
    if (this.size === 0) return;
    if (this.size === 1) {
      this.head = this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.size--;
  }

  toString() {
    let result = '';
    let currNode = this.head;
    while (currNode) {
      result = result + currNode.value;
      currNode = currNode.next;
    }

    return result;
  }
}

const N = +input.shift();

const deque = new Deque();
const actions = [];

for (const item of input) {
  const [type, value] = item.split(' ');

  switch (type) {
    case '1':
      deque.pushBack(value);
      actions.push('back');
      break;
    case '2':
      deque.pushFront(value);
      actions.push('front');
      break;
    case '3':
      if (actions.length > 0) {
        const action = actions.pop();
        if (action === 'back') {
          deque.popBack();
        } else if (action === 'front') {
          deque.popFront();
        }
      }
      break;
  }
}

const answer = deque.toString();

console.log(answer.length ? answer : 0);
