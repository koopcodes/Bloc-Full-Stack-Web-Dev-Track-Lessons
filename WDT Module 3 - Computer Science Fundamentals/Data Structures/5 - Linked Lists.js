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

	addToHead(value) {
		const newNode = { value };
		newNode.next = this.head;
		this.head = newNode;
		this.length++;
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

	find(val) {
		let thisNode = this.head;

		while (thisNode) {
			if (thisNode.value === val) {
				return thisNode;
			}

			thisNode = thisNode.next;
		}

		return thisNode;
	}

	remove(val) {
		if (this.length === 0) {
			return undefined;
		}

		if (this.head.value === val) {
			return this.removeFromHead();
		}

		let previousNode = this.head;
		let thisNode = previousNode.next;

		while (thisNode) {
			if (thisNode.value === val) {
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
		for (var node = head; node != null; node = node.next) {
			while (node.next && node.data == node.next.data) {
				node.next = node.next.next;
			}
		}
		return head;
	}
}
const list = new LinkedList('first').addToHead('second').addToHead('third');

// {
//     length: 3,
//     head: {
//         value: 'third',
//         next: {
//             value: 'second',
//             next: {
//                 value: 'first',
//                 next: null
//             }
//         }
//     }
// }
//
// Tail Pointer
// head     tail
//  ↓         ↓
// 12 → 99 → 37 → ∅
// const list = {
//     head: → { value: 12, next: ⤵ }
//             { value: 99, next: ⤵ }
//     tail: → { value: 37, next: ∅ }
// };
//
// Doubly Linked List
//   head
//     ↓
// ∅ ← 12 ⇄ 99 ⇄ 37 → ∅
// const list = {
//     head: → { value: 12, pre: ∅, next: ⤵ }
//             { value: 99, pre: ⤴, next: ⤵ }
//             { value: 37, pre: ⤴, next: ∅ }
// };
//
// Circular Linked List
// head
//  ↓
//  12 ← 37
//   ↘  ↑
//     99
// const list = {
//     head: → { value: 12, next: ⤵ }
//             { value: 99, next: ⤵ }
//             { value: 37, next: list.head }
// };
//
// Circular, Doubly-Linked List with Head and Tail Pointers
// head   tail
//  ↓      ↓
// 12  ⇄  37
//   ↘↖  ↗↙
//     99
// const list = {
//     head: → { value: 12, pre: list.tail, next: ⤵ }
//             { value: 99, pre: ⤴,        next: ⤵ }
//     tail: → { value: 37, pre: ⤴, next: list.head }
// };
//
// getFromIndex(index) — pass in a number and get the value of the item at that index in the list. We’d need to traverse the list down to the desired index
// addAtIndex(index, val) — pass in an index and add a new node at that location
// addAtIndex(index, val)
// addToTail(value)
// removeFromTail()
