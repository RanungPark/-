class Node {
  constructor(value = '') {
    this.value = value;
    this.children = new Map();
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(string) {
    let node = this.root;
    for (const char of string) {
      if (!node.children.has(char)) {
        node.children.set(char, new Node(node.value + char));
      }
      node = node.children.get(char);
    }
  }

  has(string) {
    let node = this.root;

    for (const char of string) {
      if (!node.children.has(char)) {
        return false;
      }
      node = node.children.get(char);
    }

    return true;
  }
}
