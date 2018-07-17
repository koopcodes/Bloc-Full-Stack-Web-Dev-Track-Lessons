//Binary Search of sorted list
function wordSearch(arrayToSearch, wordToFind) {
	var lowElement = arrayToSearch[0];
	var highElement = arrayToSearch[arrayToSearch.length - 1];

	while (lowElement <= highElement) {
		var middleElement =
			(arrayToSearch.indexOf(lowElement) + arrayToSearch.indexOf(highElement)) /
			2;
		middleElement = Math.round(middleElement);

		if (arrayToSearch[middleElement] > wordToFind) {
			highElement = arrayToSearch[middleElement - 1];
		} else if (arrayToSearch[middleElement] < wordToFind) {
			lowElement = arrayToSearch[middleElement + 1];
		} else {
			return arrayToSearch[middleElement];
		}
	}
	return 'That name is not in the list';
}

var dictionary = ['Albatross','Baboon','Cat','Dog','Egret','Falcon','Gorilla','Hare','Incubus','Jellyfish','Killer Whale'];
wordSearch(dictionary, 'Albatross');

//Linear search of unsorted list
var fishTank = [
	'goldfish',
	'goldfish',
	'green swordtail',
	'commmon molly',
	'goldfish',
	'platy',
	'white-spotted goldfish',
  'platy',
  'common molly',
  'goldfish'
];

function findFish(fishesToSearch, fishToFind) {
	for (var i = 0; i < fishesToSearch.length; i++) {
		if (fishesToSearch[i] === fishToFind) {
			return "You netted a " + fishToFind + " from the fish tank";
		}
	}
	return "There is no " + fishToFind + " in the tank";
}

findFish(fishTank, 'white-spotted goldfish');
