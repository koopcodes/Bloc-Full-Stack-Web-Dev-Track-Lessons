menu();

function menu() {
	var menuObject = {};
	const favs = ["Chicago Style Pan Pizza", "Milk", "Peanut M&M's"];
	const prices = [27.99, 3.99, 1.99];
	favs.forEach(function (value, index) {
		menuObject[value] = prices[index];
	});
	console.log(menuObject);
}
