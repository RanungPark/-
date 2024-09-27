function binarySerach(array, findValue) {
  let left = 0;
  let ringt = array.length - 1;
  let mid = Math.floor((left + ringt) / 2);

  while (left < ringt) {
    if (array[mid] === findValue) {
      return mid;
    }

    if (array[mid] < findValue) {
      left = mid + 1;
    } else {
      ringt = mid - 1;
    }

    mid = Math.floor((left + ringt) / 2);
  }

  return -1;
}

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySerachTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let node = this.root;
    while (node !== null) {
      if (node.value < value) {
        if (node.right === null) {
          node.right = newNode;
          break;
        }
        node = node.right;
      } else {
        if (node.left === null) {
          node.left = newNode;
          break;
        }
        node = node.left;
      }
    }
  }
}
