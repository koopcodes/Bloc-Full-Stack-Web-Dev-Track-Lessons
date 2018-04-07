<p style = "text-align: center; font-weight: bold">WDT Frontend & Programming Fundamentals<br>Programming in JS<br>Checkpoint 17 - Classes</p>

# Questions

**Q1: What is object-oriented programming?**
> **A1:** Object-oriented programming is a programming language model organized around objects rather than "actions" and data rather than logic.

**Q2: What is a constructor?**
> **A2:**  A constructor is any function used to creater and initialize an object.

**Q3: What is the purpose of the keyword `super`?**
>**A3:** The super keyword is used to access and call functions on an object's parent.

**Q4: What are classes that do not use the keyword `extends` called?**
> **A4:**
> * A class
> * A parent class
> * A prototype
# Code Practice
```
class Clothes {
    constructor(name, size, price) {
        this.name = name;
        this.size = size;
        this.price = price;
    }

    getFullInfo() {
        return `${this.name} ${this.size} ${this.price}`;
    }
}

class Shirt extends Clothes {
    constructor() {
        super("TShirt", "XXL", 19.95);
    }
}

var s = new Shirt();
console.log(s.getFullInfo());
```