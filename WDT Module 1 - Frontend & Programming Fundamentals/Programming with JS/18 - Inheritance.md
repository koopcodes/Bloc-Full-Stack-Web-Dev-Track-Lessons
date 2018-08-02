<p style="text-align:center; font-weight:bold">WDT Frontend & Programming Fundamentals<br>Programming in JS<br>Checkpoint 18 - Inheritance</p>

# Questions
**Q1: What does "DRY" stand for? What does the "DRY principle" imply in programming or software development??**
> **A1: ** **D.R.Y.** **D**on't **R**epeat **Y**ourself<br>"Every piece of knowledge must have a single, unambiguous, authoritative representation within a system"<br>
A principle in programming that holds everything should be represented once, variables, functions, objects, databases schemas, test plans, the build system, even documentation. When used properly it keeps modication of any single element from affecting any logically unrelated elements, and elements that are logically related all change predictably, uniformly, and in sync.  It saves time, and in another era when storage and memory were more scarce, it saved space as well. The alternative is **W.E.T.** solutions, **W**e **E**njoy **T**yping, or **W**rite **E**verything **T**wice

# Code Practice
```
class Product {
	constructor(name, size, price, type) {
		this.name = name;
		this.size = size;
		this.price = price;
		this.type = type;
	}
	getName() {
		return this.name;
	}
	getSize() {
		return this.size;
	}
	getPrice() {
		return this.price;
	}
	getType() {
		return this.type;
	}
}

class Shirt extends Product {
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
}

class Pants extends Product {
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
}

class Jacket extends Product {
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
}

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

```