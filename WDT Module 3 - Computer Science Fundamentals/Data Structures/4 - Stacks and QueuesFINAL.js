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

// var queue = new Queue();
// queue.enqueue("koop");
// queue.enqueue("koopdev")
// queue.dequeue();
// queue.printQueue();

//newStack functionality from a Queue
class Stack {
  constructor(){
    this.pop = function(stack){
      var intStack = [];
      var poppedCharacter = [];

      for(var i = 0; i < stack.length; i++){
        if(i == stack.length - 1){
          poppedCharacter.push(stack[i]);
        } else {
          intStack.push(stack[i]);
        }
      }
			return 'New Stack: ' + intStack + ' Removed: ' + poppedCharacter;
    }
  }
}

var newStack = new Stack();
newStack.pop("Koop"); // 'New Stack: K,o,o Removed: p'
