<p style="text-align: center; font-weight:bold">WDT Frontend & Programming Fundamentals<br>Programming with JS<br>Checkpoint 11 - Basic Objects</p>

> **Q1:  In your own words, what is a JavaScript object??**

**A1:** An object is a collection of properties

> **Q2: What is a property of a JavaScript object?**

**A2:** A property is a characteristic of an object, defined by a name/key plus a value.  The value can be anything, a number, a string, an array, even a function (called a method when attached to an Object as a Property)

**Code Practice**

```
class Clothes {
  constructor(name, size, price) {
    this.name = name;
    this.size = size;
    this.price = price;
    this.type = 'Shirt';
  }
}
let shirt = new Clothes("Biker Jacket", "medium", 20);
console.log(shirt);
```
