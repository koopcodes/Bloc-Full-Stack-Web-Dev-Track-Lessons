class Node {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	contains(data) {
		var found = false;
		thisNode = this.root;
		while (!found && thisNode) {
			if (data < thisNode.data) {
				thisNode = thisNode.left;
			} else if (data > thisNode.data) {
				thisNode = thisNode.right;
			} else {
				found = true;
			}
		}
		return found;
	}

	add(data) {
		var newNode = new Node(data);
		if (this.root === null) {
			this.root = newNode;
		} else {
			thisNode = this.root;
			while (true) {
				if (data < thisNode.data) {
					if (thisNode.left === null) {
						thisNode.left = newNode;
						break;
					} else {
						thisNode = thisNode.left;
					}
				} else if (data > thisNode.data) {
					if (thisNode.right === null) {
						thisNode.right = newNode;
						break;
					} else {
						thisNode = thisNode.right;
					}
				} else if (data === thisNode.data) {
					break;
				}
			}
		}
	}

	getRootNode() {
		return this.root;
	}

	inOrder(node) {
		if (node) {
			if (node.left !== null) {
				inOrder(node.left);
			}
			console.log(node.data);
			if (node.right !== null) {
				inOrder(node.right);
			}
		}
	}

	size() {
		var length = 0;
		this.inOrder (() => length ++);
		return length;
	}

	toArray() {
		var result = [];
		this.inOrder(() => result.push(node.data));
		return result;
	}

	toString(){
  	return this.toArray().toString();
  }

}

var BST = new BinarySearchTree();

BST.add(8);
BST.add(10);
BST.add(3);
BST.add(14);
BST.add(6);
BST.add(1);
BST.add(13);
BST.add(7);
BST.add(4);
BST.add(27);

var root = BST.getRootNode();
BST.contains(14);
