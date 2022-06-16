const words = ["go", "gone", "guild"];

class Node {
  constructor(value = "") {
    this.value = value;
    this.children = new Map();
  }
}

class Trie {
  constructor() {
    this.root = { node: new Node(), count: 0 };
  }

  insert(string) {
    let currentNode = this.root;

    for (const char of string) {
      if (!currentNode.node.children.has(char)) {
        currentNode.node.children.set(char, {
          node: new Node(currentNode.node.value + char),
          count: 0,
        });
      }

      currentNode = currentNode.node.children.get(char);

      currentNode.count++;
    }
  }

  has(string) {
    let currentNode = this.root;

    for (const char of string) {
      if (!currentNode.node.children.has(char)) {
        return false;
      }

      currentNode = currentNode.node.children.get(char);
    }

    return currentNode.count;
  }
}

function solution(words) {
  var answer = 0;

  const trie = new Trie();

  words.sort((a, b) => a.length - b.length);

  for (const item of words) {
    trie.insert(item);
  }

  for (const item of words) {
    let char = "";

    for (let i = 0; i < item.length; i++) {
      char += item[i];

      if (trie.has(char) === 1 || item === char) {
        break;
      }
    }

    answer += char.length;
  }

  return answer;
}

console.log(solution(words));
