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
