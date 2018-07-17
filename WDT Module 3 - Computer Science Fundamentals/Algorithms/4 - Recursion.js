var elementCount = 0;

function countArrayElements (array) {
  if (!Array.isArray(array)) {
    elementCount ++;
  }
  for (let i = 0; i < array.length; i++) {
    countArrayElements(array[i]);
    }
	return elementCount;
}

var multiDimensionalArray = [[10,9,8,[7,6,5,[4,3,2],1]],[2,9,4],[7, [5, 2, 9], [8, 9],[[10, 11, 12],[13, 14, 15], 16]]];
countArrayElements(multiDimensionalArray); // 26

function isPalindromeRecursive(testString) {
	var testStringLength = testString.length;
	if (testStringLength === 0 || testStringLength === 1) {
		return true;
	}

	if (testString[0] === testString[testStringLength - 1]) {
		return isPalindromeRecursive(testString.slice(1, testStringLength - 1));
	}

	return false;
}

isPalindromeRecursive('racecar'); // true

function checkHouses(houses){
    if(houses.length === 0){
        return "All houses checked";
    } else {
      console.log(houses.length + ' more to check');
        return checkHouses(houses.slice(1));
    }
}

checkHouses(["My House", "Your House", "Their House", "Her House", "His House", "It's House"]); // 'All houses checked'
