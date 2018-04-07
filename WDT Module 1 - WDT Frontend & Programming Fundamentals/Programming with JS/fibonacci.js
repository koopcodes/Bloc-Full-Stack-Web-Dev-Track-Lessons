// function count(num) {
// 	console.log(num);
// 	if (num >= 1) {
// 		count(num - 1); //count is being called within itself
// 	}
// }
// count(10);
fib();

function fib() {
	var fibonacci = function (n) {
		console.log(n);
		if (n === 0)
			return 0;
		if (n === 1)
			return 1;
		return fibonacci(n - 1) + fibonacci(n - 2);
	};
	console.log(fibonacci(23));
}
