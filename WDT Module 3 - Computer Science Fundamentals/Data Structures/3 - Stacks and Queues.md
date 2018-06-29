<p style="text-align: center; font-weight:bold">WDT Module 3 - Computer Science Fundamentals<br>Section 2 - Data Structures<br>Checkpoint 3 - Stacks and Queues</p>

# Exercises
**1. What is the main difference between a stack and a queue?**
> Queues are First In First Out (FIFO) where elements are **added to the 'end'** or 'back' of the queue object **BUT removed from the 'front'** of the queue object. Elements exit in the chronological order they were entered, **Oldest First**

>Stacks are Last In First Out (LIFO) where elements are **added AND removed from the 'end'** or 'back' of the stack object. Elements exit in the reverse chronological order they were entered, **Newest First**

**2. What are the similarities between stacks and queues?**
> Both are data structures that only allow handling of elements in the proper order. Neither data structure allows insertion or deletion of elements "in the middle" of the storage object, only at the 'ends' of the data object.  Both stacks and queues add new items to the 'rear' of the object (but remove elements from different 'ends'). Stacks and Queues also have the same time complexity, O(1) for Insertion/Deletion and O(n) for Search/Access.

**3. Imagine you are an engineer tasked with implementing the UNDO and REDO options in a word processor such as Microsoft Word. Which data structure would you use for each option and why?**
For the UNDO operation I would use a Stack because we will be moving through previous operations in reverse chronological order, undoing the most recent operations first.  since the REDO function is the reverse of the UNDO we should a Queue as it does the opposite of Stack, redoing the most recent operations in chronological order.

# Programming Questions
You may program the following question in any language of your choice. Before you begin coding, write out a plan as to how you will solve the question.

**A) Given a string, reverse it using a stack. For example, the string "Bloc!" should be converted to "!colB".**
```psuedocode
INIT CLASS Stack named letters
INIT String named word
INIT String named reverseWord

INPUT Characters into word
FOR each Character in word
	PUSH Character to last position (back) of Stack letters
END FOR
FOR each Character in String word
	COPY Character to reverseWord
	DELETE Character from last position in Stack letters
END FOR
RETURN reverseWord
```

```javascript
var letters = [];
var reverseWord = '';
var word = prompt('Enter a string of characters');

for (let i = 0; i < word.length; i++) {
	letters.push(word[i]);
}

for (let i = 0; i < word.length; i++) {
	reverseWord += letters.pop();
}

console.log('Original Word: ' + word);
console.log('Reversed Word: ' + reverseWord);
console.log(word === reverseWord ? word + ' is a palindrome' : word + ' is not a palindrome');

```

**B) Implement the delete functionality of a stack using one queue. Make a FIFO data structure mirror the functionality of a LIFO data structure.**

	1. To delete an item, take all of the elements in the queue one at a time and put them at the end of the queue, except for the last one which should be deleted and returned.

```psuedocode
CLASS Stack
 FUNCTION pop(queue)
	INIT empty Arrays newQueue and itemToDelete
	FOR each Character in queue
	 	IF NOT last Character in queue
		 PUSH to end of newQueue
		ELSE
			PUSH last Character in queue to itemToDelete
		END IF
	END FOR
 END FUNCTION
END CLASS
```

```javascript
class Stack {
  constructor(){
    this.pop = function(queue){
      var newQueue = [];
      var itemToDelete = [];

      for(var i = 0; i < queue.length; i++){
        if(i == queue.length - 1){
          itemToDelete.push(queue[i]);
        } else {
          newQueue.push(queue[i]);
        }
      }
			return 'New Queue: ' + newQueue + ' Removed: ' + itemToDelete;
    }
  }
}

var stack = new Stack();

console.log(stack.pop("Koop")); //returns New Queue: K,o,o Removed: p
```
**C) Fill in the methods for the following Queue class so that it will work as expected (FIFO)**
```
CLASS QUEUE
 FUNCTION enqueue(element)
   PUSH element to Array
 END FUNCTION

 FUNCTION dequeue
   SHIFT Array
 END FUNCTION
END CLASS
PROGRAMS
```

```javascript
class Queue {
	constructor () {
	this.items = [];
	}

	enqueue(element) {
		this.items.push(element);
	}

	dequeue() {
		if(this.isEmpty()) {
        return "Underflow";
		} else {return this.items.shift();}
	}

	isEmpty() {
		return this.items.length == 0;
	}

	printQueue() {
		var queue = "";
    for(var i = 0; i < this.items.length; i++)
        queue += this.items[i] +" ";
    return queue;
	}
}

```
