
// var array = [760, 893, 586, 183, 783, 903, 269, 580, 8, 16, 25, 812, 724, 839, 321, 332, 692, 86, 645, 484, 68, 55];
/*
function bubbleSort(array) {
	for (var i = 0; i < array.length; i++) {
		for (var j = 0; j < array.length; j++) {
			if (array[j - 1] > array[j]) {
				var temp = array[i];
				array[i] = array[j];
				array[j] = temp;
			}
		}
	}
	return array;
}
console.log(array);
*/

var array = [760, 893, 586, 183, 783, 903, 269, 580, 8, 16, 25, 812, 724, 839, 321, 332, 692, 86, 645, 484, 68, 55];

function bubbleSort(array) {
	var swapped;
	do {
		swapped = false;
		for (var i = 0; i < array.length - 1; i++) {
			if (array[i] > array[i + 1]) {
				var temp = array[i];
				array[i] = array[i + 1];
				array[i + 1] = temp;
				swapped = true;
			}
		}
	} while (swapped);
}
bubbleSort(array);
console.log(array);
