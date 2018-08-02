function winOrLose(score, lives) {
  if ((score >= 3) && (lives > 0)){
     return "You Win!";
  }
      return "You Lose!";
}

console.log(winOrLose(3,1));

function sayHello(name){
  console.log("Hello, " + name + "\!");
}

sayHello("Koop");

var add = function(a, b) {
  return a + b;
}

var result = add(3, 7);

console.log(result);

var helloGoodbye = function(name) {
  return seyHello(name) + " " + sayGoodbye(name);
}

var seyHello = function(name) {
  return "Hello " + name + " !";
}

var sayGoodbye = function(name) {
  return "Goodbye " + name + " !";
}

console.log(helloGoodbye("Sarah"));

//var array = [2,6,9,14,5,3,7,8,12]
//function findLongestWord(array){
//  var highest = 0;
//  for (var i = 0; i < array.length; i++){
//    if ( array[i] > highest){ highest = array[i];}
//    return highest;
//  }
//  console.log(findLongestWord());
//}

function sum(array) {
	var array = [1, 2, 3, 4]
	var total = 0;
	for (var i = 0; i < array.length; i++){
		total = total + array[i];
	}
	return total;
}
console.log(sum());