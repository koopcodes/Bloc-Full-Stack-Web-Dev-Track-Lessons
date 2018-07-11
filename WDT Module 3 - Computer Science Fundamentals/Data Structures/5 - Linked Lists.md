<p style="text-align: center; font-weight:bold">WDT Module 3 - Computer Science Fundamentals<br>Section 2 - Data Structures<br>Checkpoint 5 - Linked Lists

# Exercises

**1. What are some pros and cons of using linked lists instead of arrays?**
>Pros: No memory space wasted on placeholder elements, and memory allocated does not need to be contiguous allowing linked lists to become extremely large
Cons: All preceding nodes must be accessed in order before one can access the desired node

**2. Come up with a real world example of a linked list**
> Over time it can be difficult for an Operating System to find contiguous disk space sufficient to store large files so it usually splits these up into chunks across the physical hard drive and stores the locations of the file fragments stored as a linked list

# Programming Questions

Before beginning to code, write out a plan explaining how to solve the question.

**1. The Linked List push function should take a value, create a node, and add it to the end of a list. Below is a push function for a singly linked list. However, there is something wrong with it. Find the bug and fix the code.**
```
LinkedList.prototype.push = function(element) {
  var node = new Node(element);
  currentNode = this.head;

  if(!currentNode) {
    this.head = node;
    return node;
  } else {
    currentNode.next = node;
    return node;
  }
}
```

**2. Given an unsorted singly linked list, remove all duplicates from the linked list.**
> Example
Input: a -> c -> d -> d -> a
Output: a -> c -> d

```javascript
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
          this.length --;
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
		console.log('The element at position ' + i + ' has value ' + thisNode.value);
	}
}

// Remove multiple duplicates from middle
var multipleDupes = new LinkedList();
multipleDupes.addToHead(8,5,6,7,5,5,6,7,8);
multipleDupes.removeDuplicates();
multipleDupes.showAllElements();
```

**3. Given an unsorted singly linked list, reverse it.**
>Example
Input: a -> b -> c -> d
Output: d -> c -> b -> a

```javascript
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

	reverseLinkedList() {
		if (!this.head || !this.head.next) {
			console.log('No dupes! Empty or a single element Linked List.');
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

	showAllElements() {
		if (this.head == null) return;
		var thisNode = this.head,
			i = 1;
		while (thisNode.next != null) {
			console.log('The element at position ' + i + ' has value ' + thisNode.value);
			thisNode = thisNode.next;
			i++;
		}
		console.log('The element at position ' + i + ' has value ' + thisNode.value);
	}
}

// Reverse an unsorted linked list
var reverseMe = new LinkedList();
reverseMe.addToHead(1,9,2,8,3,7,4,6,5);
reverseMe.reverseLinkedList();
reverseMe.showAllElements();
```
