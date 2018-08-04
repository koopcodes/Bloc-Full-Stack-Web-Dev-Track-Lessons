function reverseString(inputString) {
	var reversedWords = [];
	var reversedString = '';
	var splitArray = inputString.split(' ');
	splitArray.forEach(word => {
		reversedWords.push(reverseWords(word));
	});
	reversedString = reversedWords.join(' ');
	return reversedString;
}

function reverseWords(word) {
	var letters = [];
	var reverseWord = '';
	for (let i = 0; i < word.length; i++) {
		letters.push(word[i]);
	}
	for (let i = 0; i < word.length; i++) {
		reverseWord += letters.pop();
	}
	return reverseWord;
}

reverseString('I go to Bloc Yippee!');
