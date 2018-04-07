class Product {
	constructor(name, size, price, type) {
		this.name = name;
		this.size = size;
		this.price = price;
		this.type = type;
	}														//end constructor
	getName() {
		return this.name;
	}														//end getName
	getSize() {
		return this.size;
	}														//end getSize
	getPrice() {
		return this.price;
	}														//end getPrice
	getType() {
		return this.type;
	}														//end getType
}															//end Procuct class creation

class Shirt extends Product {								//extend class Product to class Shirt
	constructor(name, size, price, type) {
		super(name, size, price, 'Shirt');
	}
	getName() {
		return "This product's name is " + super.getName();
	}
	getSize() {
		return "This product's size is " + super.getSize();
	}
	getPrice() {
		return "This product's price is " + super.getPrice();
	}
	getType() {
		return "This product's type is " + super.getType();
	}
}															//end class Shirt creation

class Pants extends Product {								//extend class Product to class Pants
	constructor(name, size, price, type) {
		super(name, size, price, 'Pants');
	}
	getName() {
		return "This product's name is " + super.getName();
	}
	getSize() {
		return "This product's size is " + super.getSize();
	}
	getPrice() {
		return "This product's price is " + super.getPrice();
	}
	getType() {
		return "This product's type is " + super.getType();
	}
}															//end class Pants creation

class Jacket extends Product {								//extend class Product to class Shirt
	constructor(name, size, price, type) {
		super(name, size, price, 'Jacket');
	}
	getName() {
		return "This product's name is " + super.getName();
	}
	getSize() {
		return "This product's size is " + super.getSize();
	}
	getPrice() {
		return "This product's price is " + super.getPrice();
	}
	getType() {
		return "This product's type is " + super.getType();
	}
}															//end class Jacket creation

let shirt = new Shirt('T-shirt', 'XXL', 19.95);
let pants = new Pants('Blue Jeans', 'W36 L34', 39.95);
let jacket = new Jacket('Blue Blazer', '50L', 199);

console.log(shirt.getType());
console.log(shirt.getName());
console.log(shirt.getSize());
console.log(shirt.getPrice());

console.log(pants.getType());
console.log(pants.getName());
console.log(pants.getSize());
console.log(pants.getPrice());

console.log(jacket.getType());
console.log(jacket.getName());
console.log(jacket.getSize());
console.log(jacket.getPrice());