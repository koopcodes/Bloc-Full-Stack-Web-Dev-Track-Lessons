class LinkedList {
	constructor(...values) {
		this.head = null;
		this.length = 0;
		this.addToHead(...values);
	}

	_addSingleItemToHead(value) {
		const newNode = { value };
		newNode.next = this.head;
		this.head = newNode;
		this.length++;
	}

	addToHead(...values) {
		values.forEach(value => this._addSingleItemToHead(value));
		return this;
	}

	removeFromHead() {
		if (this.length === 0) {
			return undefined;
		}

		const value = this.head.value;
		this.head = this.head.next;
		this.length--;

		return value;
	}

	find(valueSought) {
		let thisNode = this.head;

		while (thisNode) {
			if (thisNode.value === valueSought) {
				return thisNode;
			}

			thisNode = thisNode.next;
		}

		return thisNode;
	}

	remove(removeValue) {
		if (this.length === 0) {
			return undefined;
		}

		if (this.head.value === removeValue) {
			return this.removeFromHead();
		}

		let previousNode = this.head;
		let thisNode = previousNode.next;

		while (thisNode) {
			if (thisNode.value === removeValue) {
				break;
			}

			previousNode = thisNode;
			thisNode = thisNode.next;
		}

		if (thisNode === null) {
			return undefined;
		}

		previousNode.next = thisNode.next;
		this.length--;
		return this;
	}

	removeDuplicates() {
		if (!this.head || !this.head.next) {
			console.log('No dupes! Empty or a single element Linked List.');
			return;
		}

		var thisNode = this.head;
		while (thisNode != null) {
			var previousNode = thisNode;
			var nextNode = thisNode.next;
			while (nextNode != null) {
				if (thisNode.value == nextNode.value) {
					previousNode.next = nextNode.next;
					this.length--;
				} else {
					previousNode = nextNode;
				}
				nextNode = nextNode.next;
			}
			thisNode = thisNode.next;
		}
		return this;
	}

	showAllElements() {
		if (this.head == null) return;
		var thisNode = this.head,
			i = 1;
		while (thisNode.next != null) {
			console.log('The element at position ' + i + ' has value ' + thisNode.value);
			thisNode = thisNode.next;
			i++;
		}
		// printing the last element
		console.log('The element at position ' + i + ' has value ' + thisNode.value);
	}

	reverseLinkedList() {
		if (!this.head || !this.head.next) {
			console.log('No duplicates were found. Empty or a single element Linked List.');
			return;
		}

		var previousNode = null;
		var thisNode = this.head;
		var nextNode;

		while (thisNode) {
			nextNode = thisNode.next;
			thisNode.next = previousNode;
			previousNode = thisNode;
			thisNode = nextNode;
		}

		this.head = previousNode;
	}
}

// // Base case : No duplicates
// var noDupes = new LinkedList();
// noDupes.addToHead(1,2,3);
// noDupes.removeDuplicates();
// noDupes.showAllElements();

// // Two nodes with duplicates
// var twoDupes = new LinkedList();
// twoDupes.addToHead(5);
// twoDupes.addToHead(5);

// twoDupes.removeDuplicates();
// twoDupes.showAllElements();

// // Two nodes without duplicates
// var twoNodesNoDupes = new LinkedList();
// twoNodesNoDupes.addToHead(3);
// twoNodesNoDupes.addToHead(5);

// twoNodesNoDupes.removeDuplicates();
// twoNodesNoDupes.showAllElements();

// Remove duplicates at the end
// var endDupes = new LinkedList();
// endDupes.addToHead(5,6,7,8,9,5);
// endDupes.removeDuplicates();
// endDupes.showAllElements();

// // Remove multiple duplicates from middle
// var multipleDupes = new LinkedList();
// multipleDupes.addToHead(8,5,6,7,5,5,6,7,8);
// multipleDupes.removeDuplicates();
// multipleDupes.showAllElements();

// Reverse an unsorted linked list
var reverseMe = new LinkedList();
reverseMe.addToHead(1, 2, 3, 3, 2, 1, 5);
reverseMe.reverseLinkedList();
reverseMe.showAllElements();
