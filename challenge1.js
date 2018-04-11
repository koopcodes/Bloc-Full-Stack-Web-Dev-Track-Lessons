//Using the JavaScript language, have the function NumberStream(str) take the str parameter being passed which will contain the numbers 2 through 9, and determine if
//there is a consecutive stream of digits of at least N length where N is the actual digit value. If so, return the string true, otherwise return the string false. For
//example: if str is "6539923335" then your program should return the string true because there is a consecutive stream of 3's of length 3. The input string will always
//contain at least one digit.

// Sample Test Cases
// Input:"5556293383563665"
// Output:"false"
// Input:"5788888888882339999"
// Output:"true"

const NumberStream = str => {
	let currentMatchingDigit = null;
	let currentCountOfDigit = 1;

	for (let i = 1; i <= str.length; i++) {
		if (str[i] === str[i - 1]) {
			currentMatchingDigit = str[i];
			currentCountOfDigit += 1;
		} else {
			currentMatchingDigit = null;
			currentCountOfDigit = 1;
		}

		if (parseInt(currentCountOfDigit) === parseInt(currentMatchingDigit)) {
			return true;
		}
	}
	return false;
};

console.log(NumberStream('5556293383563665'), false);
console.log(NumberStream('5788888888882339999'), true);
console.log(NumberStream('6539923335'), true);
console.log(NumberStream('653992335'), false);
console.log(NumberStream('65399233335'), true);
console.log(NumberStream('653992333'), true);
console.log(NumberStream('22'), true);

//Object Deconstruction

const obj = {
	foo: 'bar',
	baz: 'bam',
	color: 'blue',
};

const whatColor = ({ color: favorite }) => {
	return 'My Color ' + favorite;
};

whatColor(obj);
