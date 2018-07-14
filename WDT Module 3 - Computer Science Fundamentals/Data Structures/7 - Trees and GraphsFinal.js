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
		this.length = 0;
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

	findDistanceBetweenTwoNodes(root, n1, n2) {
		var lowestCommonAncestor = this.findCommonAncestor(root, n1, n2);
    console.log('The Lowest Common Ancestor (LCA) is ', lowestCommonAncestor);
		var distance1 = this.countAncestors(lowestCommonAncestor, n1);
		console.log('Distance from root to ' + n1 + ' is ' + distance1);
		var distance2 = this.countAncestors(lowestCommonAncestor, n2);
		console.log('Distance from root to ' + n2 + ' is ' + distance2);
    var distance3 = this.countAncestors(root, lowestCommonAncestor);
    console.log('Distance from root to the LCA is ', distance3);
		var totalDistance = (distance1 + distance2) - (2 * distance3);
    return ('The distance between node ' + n1 + ' and node ' + n2 + ' is ' + totalDistance);
	}

	findCommonAncestor(root, n1, n2) {
		if (!root) return;
		var data = root.data;
		if (n1 === data || n2 === data) {
			return data;
		}
		if (n1 < data && n2 < data) {
			return this.findCommonAncestor(root.left, n1, n2);
		}
		if (n1 > data && n2 > data) {
			return this.findCommonAncestor(root.right, n1, n2);
		}
		var lowestCommonAncestor = data;
		return lowestCommonAncestor;
	}

	countAncestors(root, data) {
		let current = this.root;
    let count = 0
		while (current) {
			if (data === current.data) {
        return count;
			}
			current = data < current.data ? current.left : current.right;
      count ++
		}
		return false;
	}

	getRootNode() {
		return this.root;
	}

	inOrder(node) {
		if (node) {
			if (node.left !== null) {
				this.inOrder(node.left);
			}
			console.log(node.data);
			if (node.right !== null) {
				this.inOrder(node.right);
			}
		}
	}

	insert(data) {
		var newNode = new Node(data);
		if (this.root === null) {
			this.root = newNode;
			this.length++;
		} else {
			this.insertNode(this.root, newNode);
		}
	}

	insertNode(node, newNode) {
		if (newNode.data < node.data) {
			if (node.left === null) {
				node.left = newNode;
				this.length++;
			} else {
				this.insertNode(node.left, newNode);
			}
		} else {
			if (node.right === null) {
				node.right = newNode;
				this.length++;
			} else {
				this.insertNode(node.right, newNode);
			}
		}
	}

	minNode(node) {
		if (!node) {
			return 0;
		}
		if (node.left) {
			return this.minNode(node.left);
		}
		return node.data;
	}

	maxNode(node) {
		if (!node) {
			return 0;
		}
		if (node.right) {
			return this.maxNode(node.right);
		}
		return node.data;
	}

	postorder(node) {
		if (node != null) {
			this.postorder(node.left);
			this.postorder(node.right);
			console.log(node.data);
		}
	}

	preorder(node) {
		if (node != null) {
			console.log(node.data);
			this.preorder(node.left);
			this.preorder(node.right);
		}
	}

	remove(data) {
		this.root = this.removeNode(this.root, data);
	}

	removeNode(node, key) {
		if (node === null) {
			return null;
		} else if (key < node.data) {
			node.left = this.removeNode(node.left, key);
			return node;
		} else if (key > node.data) {
			node.right = this.removeNode(node.right, key);
			return node;
		} else {
			if (node.left === null && node.right === null) {
				node = null;
				this.length--;
				return node;
			}
			if (node.left === null) {
				node = node.right;
				this.length--;
				return node;
			} else if (node.right === null) {
				node = node.left;
				this.length--;
				return node;
			}
			var rightSubtreeMinNode = this.minNode(node.right);
			node.data = rightSubtreeMinNode.data;
			node.right = this.removeNode(node.right, rightSubtreeMinNode.data);
			this.length--;
			return node;
		}
	}

	size() {
		return this.length;
	}
}

var BST = new BinarySearchTree();

BST.insert(8);
BST.insert(10);
BST.insert(3);
BST.insert(14);
BST.insert(6);
BST.insert(1);
BST.insert(13);
BST.insert(7);
BST.insert(4);
BST.insert(27);

var root = BST.getRootNode();
BST.findDistanceBetweenTwoNodes(root, 4, 7);
// BST.inOrder(root);
// console.log("Min Node:")
// BST.minNode(root);
// console.log("Max Node:")
// BST.maxNode(root);
console.log('Contains 27:');
BST.contains(27);
// BST.size();
// BST.remove(27);
// console.log('27 removed')
// BST.size()
// BST.inOrder(root);
// BST.preorder(root);
// BST.postorder(root);
