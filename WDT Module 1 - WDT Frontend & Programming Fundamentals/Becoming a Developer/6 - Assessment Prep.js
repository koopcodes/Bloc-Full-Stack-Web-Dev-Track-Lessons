var even = function (num) {
	return !(num % 2);
}
var squared = function (num) {
	return num * num;
}
var food = function () {
	return favs;
}

var menuObject = {};
const favs = ["Chicago Style Pan Pizza", "Milk", "Peanut M&M's"];
const prices = [27.99, 3.99, 1.99];
favs.forEach(function (value, index) {
	menuObject[value] = prices[index];
});

console.log(even(12));
console.log(squared(100));
console.log(favs);
console.log(menuObject);