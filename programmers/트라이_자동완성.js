class Node {
  constructor(value = '') {
    this.value = value;
    this.children = new Map();
    this.count = 0;
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
        node.children.set(char, new Node(node.children + char));
      }
      node = node.children.get(char);
      node.count += 1;
    }
  }

  getRequiredInputLength(string) {
    let node = this.root;
    let inputCount = 0;

    for (const char of string) {
      node = node.children.get(char);
      inputCount += 1;

      if (node.count === 1) {
        break;
      }
    }

    return inputCount;
  }
}

function solution(words) {
  const trie = new Trie();
  let totalInputCount = 0;

  for (const word of words) {
    trie.insert(word);
  }

  for (const word of words) {
    totalInputCount += trie.getRequiredInputLength(word);
  }

  return totalInputCount;
}

solution(['go', 'gone', 'guild']);
solution(['abc', 'def', 'ghi', 'jklm']);
solution(['word', 'war', 'warrior', 'world']);
