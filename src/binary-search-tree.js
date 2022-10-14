const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  root() {
    if (this.root.data) {
      return this.root;
    } else {
      return null;
    }
  }

  add(data) {
    this.root = addNode(this.root, data);

    function addNode(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addNode(node.left, data);
      } else if (data > node.data) {
        node.right = addNode(node.right, data);
      }

      return node;
    }
    
  }

  has(data) {
    return hasData(this.root, data);

    function hasData(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      if (data < node.data) {
        return hasData(node.left, data);
      } else if (data > node.data) {
        return hasData(node.right, data);
      }
    }
  }

  find(data) {
    return searchData(this.root, data);

    function searchData(node, data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        return searchData(node.left, data);
      } else if (data > node.data) {
        return searchData(node.right, data);
      }
    }
  }

  remove(data) {
    this.root = this.removeData(this.root, data);

    function removeData(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeData(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeData(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.right;
          return node;
        }

        let minRight = node.right;
        while (minRight.left) {
          minRight = minRight.data;
        }
        node.data = minRight.data;
        node.right = removeData(node.right, minRight.data);
        return node;
      }
    }
  }

  min() {
    if (!this.root) {
      return undefined;
    }

    let node = this.root;
    while (node.left) {
      node = node.left;
    }

    return node.value;
  }

  max() {
    if (!this.root) {
      return undefined;
    }

    let node = this.root;
    while (node.right) {
      node = node.right;
    }

    return node.value;
  }
}

module.exports = {
  BinarySearchTree
};