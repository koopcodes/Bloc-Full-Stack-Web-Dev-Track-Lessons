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
