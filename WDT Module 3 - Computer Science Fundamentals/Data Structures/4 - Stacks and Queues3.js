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
