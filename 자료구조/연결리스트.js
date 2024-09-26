class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.tail = null;
    this.head = null;
  }

  find(value) {
    let currNode = this.head;

    while (currNode !== null && current.value !== value) {
      currNode = currNode.next;
    }

    if (currNode === null) {
      return null;
    }

    return currNode;
  }

  append(newValue) {
    const newNode = new Node(newValue);
    if (this.head === null) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  insert(node, newValue) {
    const newNode = new Node(newValue);

    newNode.next = node.next;
    node.next = newNode;
  }

  remove(value) {
    if (this.head === null) {
      return;
    }

    if (this.head.value === value) {
      this.head = this.head.next;
      return;
    }

    let prevNode = this.head;

    while (prevNode.next !== null && prevNode.next.value !== value) {
      prevNode = prevNode.next;
    }

    if (prevNode.next !== null) {
      prevNode.next = prevNode.next.next;
    }
  }

  display() {
    let currNode = this.head;
    let displayString = '[';
    while (currNode !== null) {
      displayString += `${currNode.value}, `;
      currNode = currNode.next;
    }
    displayString = displayString.substring(0, displayString.length - 2);
    displayString += ']';
    console.log(displayString);
  }
}

class DoubleNode extends Node {
  constructor(value) {
    super(value);
    this.prev = null;
  }
}

class DoublelyLinedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  find(value) {
    let currFrontNode = this.head;
    let currRearNode = this.tail;

    while (
      currFrontNode !== null &&
      currRearNode !== null &&
      currFrontNode === currRearNode
    ) {
      if (currFrontNode.value === value) return currFrontNode;
      if (currRearNode.value === value) return currRearNode;

      currFrontNode = currFrontNode.next;
      currRearNode = currRearNode.prev;
    }

    if (currFrontNode !== null && currFrontNode.value === value) {
      return currFrontNode;
    }

    return null;
  }

  append(newValue) {
    const newNode = new DoubleNode(newValue);

    if (this.head === null) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  }

  insert(node, newValue) {
    const newNode = new DoubleNode(newValue);

    if (node.next === null) {
      this.tail = newNode;
    } else {
      node.next.prev = newNode;
    }

    newNode.next = node.next;
    node.next = newNode;
    newNode.prev = node;
  }

  remove(value) {
    let frontNode = this.head;
    let rearNode = this.tail;

    while (frontNode !== null && rearNode !== null && frontNode === rearNode) {
      if (frontNode.value === value) {
        if (frontNode === this.head) {
          this.head = frontNode.next;
          if (this.head !== null) {
            this.head.prev = null;
          }
        } else {
          frontNode.prev.next = frontNode.next;
          if (frontNode.next !== null) {
            frontNode.next.prev = frontNode.prev;
          }
        }
        return;
      }

      if (rearNode.value === value) {
        if (rearNode === this.tail) {
          this.tail = rearNode.prev;
          if (this.tail !== null) {
            this.tail.next = null;
          }
        } else {
          rearNode.next.prev = rearNode.prev;
          if (rearNode.prev !== null) {
            rearNode.prev.next = rearNode.next;
          }
        }
        return;
      }

      frontNode = frontNode.next;
      rearNode = rearNode.prev;
    }

    if (frontNode !== null && frontNode.value === value) {
      if (frontNode === this.head) {
        this.head = frontNode.next;
        if (this.head !== null) {
          this.head.prev = null;
        }
      } else if (frontNode === this.tail) {
        this.tail = frontNode.prev;
        if (this.tail !== null) {
          this.tail.next = null;
        }
      } else {
        frontNode.prev.next = frontNode.next;
        frontNode.next.prev = frontNode.prev;
      }
    }
  }
}
