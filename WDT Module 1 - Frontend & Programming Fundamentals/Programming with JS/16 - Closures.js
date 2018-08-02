class Clothes {
	constructor(name, size, price) {
		this.name = name;
		this.size = size;
		this.price = price;
	} // end of constructor

	getFullInfo() {
		return `${this.name} ${this.size} ${this.price}`;
	} // end of getFullName
} // end of Clothes class

class Shirt extends Clothes {
	constructor() {
		super("TShirt", "XXL", 19.95); // calls the parent constructor and passes parameters
	} // end of constructor
} // end of student class

var s = new Shirt();
console.log(s.getFullInfo());