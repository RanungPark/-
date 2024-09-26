//자바스크립트 사용시
const stack = [];

stack.push(1);
stack.push(2);

stack.pop();

//클래스 이용
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(newValue) {
    const newNode = new Node(newValue);
    newNode.next = this.top;
    this.top = newNode;
    this.size += 1;
  }

  pop() {
    const topValue = this.top.vaule;
    this.top = this.top.next;
    this.sizr -= 1;
    return topValue;
  }

  stackSize() {
    return this.size;
  }
}
