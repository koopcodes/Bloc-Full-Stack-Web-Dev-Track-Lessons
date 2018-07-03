class LinkedList {
	constructor(...values) {
		this.head = null;
		this.length = 0;
	}
	removeDuplicates () {
		// Empty or a single element Linked List
		if (!this.head || !this.head.next) {
			console.log('No duplicates were found. Empty or a single element Linked List.');
			return;
		}
		var previousNode;
		var currentNode;
		var nextNode;
		var value;
		currentNode = this.head;
		while (currentNode) {
			value = currentNode.data;
			previousNode = currentNode;
			nextNode = previousNode.next;
			while (nextNode) {
				if (nextNode.data === value) {
					previousNode.next = nextNode.next;
				}
				else {
					previousNode = nextNode;
				}
				nextNode = nextNode.next;
			}
			currentNode = currentNode.next;
		}
	}
}


// Base case : No duplicates
var L1 = new LinkedList();
L1.add(5);

L1.removeDuplicates();
console.log(L1);

// Two nodes with duplicates
var L2 = new LinkedList();
L2.add(5);
L2.add(5);

L2.removeDuplicates();
console.log(L2);

// Two nodes without duplicates
var L3 = new LinkedList();
L3.add(5);
L3.add(5);

L3.removeDuplicates();
console.log(L3);

// Remove duplicates at the end
var L4 = new LinkedList();
var testData = [5,6,7,8,5];
testData.forEach(el => L4.add(el));

L4.removeDuplicates();
console.log(L4);

// Remove multiple duplicates from middle
var L5 = new LinkedList();
var testData = [5,6,7,5,5,8];
testData.forEach(el => L5.add(el));

L5.removeDuplicates();
console.log(L5);
