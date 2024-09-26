class TreeArr {
  constructor(value) {
    this.tree = [value];
  }
  leftInsert(i, value) {
    const index = 2 * i + 1;
    this.tree[index] = value;
  }

  rightInsert(i, value) {
    const index = 2 * i + 2;
    this.tree[index] = value;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class Tree {
  constructor(node) {
    this.root = node;
  }
}

const tree = new TreeArr(1);

tree.leftInsert(0, 3);
tree.rightInsert(0, 4);
tree.leftInsert(2, 5);

console.log(tree.tree);
