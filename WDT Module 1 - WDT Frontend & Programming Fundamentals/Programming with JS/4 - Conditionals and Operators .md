<p style="text-align: center">**Programming with JS**<br>

**Checkpoint Four - Conditionals and Operators**</p>

**_Questions_**
> ** Q1:  What are the three types of conditional statements?**

**A1:**
* `if`
* `else`
* `else if`

> **Q2:  What are four types of Comparison Operators and how you would use them?**

* **Equality Operators** are used to evaluate if two values are the same and returns either `true` is they are equal or `false` if they are not (or `undefined` if a variable has been declared but not assigned a value before before evaluated).  A single `=` is an assignment operator and does not help us compare values.  Equality can be evaluated by using `==`, for example: ```var test = 5; if (test == 5){do some thing};   ``` But it's important to remember that the loose equality operator `==` will perform an implicit type conversion so the numerical value `5` will be evaluated as `true` when compared to a string with a value of `"5"` as in `5 == "5"` will evaluate as `true`.  To perform a strict comparison that ensures identity in not just data value but data type we use `===`, so `5 === "5"` is `false`
* **Inequality Operators** Similar to, just opposite in function from, Eqality Operators we have Inequality Operators.  They are used to evaluate if two values are NOT the same and returns either `true` is they are unequal or `false` if they are equal (or `undefined` if a variable has been decalred but not assigned a value before before evaulated). As with equality operators there is a loose flavor `!=`, for example: ```var test = 4; if (test != 5){do some thing};  ``` that implicitly converts data types, and a strict identity version `!==` that takes into account different data types so that `5 !== "5"` evaluates as `true` while `5 != "5"` would be `false`
* **Greater Than Operators** helps us compare if one number is more than another.  The symbol used is just like in 2nd Grade math `>` as in `3 > 2` and compares the number on the left with the number on the right and returning `true` if the left number is larger or `false` if it is less.  There is also a variant `>=` that will return `true` if the number on the left is more than _or equal to_ the number on the right (or `false` if not greater). Like with the abstract (loose) equality and inequality operators `==` and `!=` javascript greater than operators **will convert data types** so `"5" > 4` is `true`
*  **Less Than Operators** helps us compare if one number is less than another.  The symbol used is just like in 2nd Grade math `<` as in `2 > 3` and compares the number on the left with the number on the right and returning `true` if the left number is smaller or `false` if it is more.  There is also a variant `<=` that will return `true` if the number on the left is less than _or equal to_ the number on the right (or `false` if not less). Like with the abstract (loose) equality and inequality operators `==` and `!=` javascript less than operators **will convert data types** so `"5" < 4` is `true`

**Code Practice**

```

var myGrade = 100;
var letterGrade = "";
var passFail = "";
if (myGrade >= 90){
  letterGrade = "A";
  passFail = "passed";
} else if ((myGrade < 90) && (myGrade >= 80)){
  letterGrade = "B";
  passFail = "passed";
} else if ((myGrade < 80) && (myGrade >= 70)){
  letterGrade = "C";
  passFail = "passed";
} else if ((myGrade < 70) && (myGrade >= 60)){
  letterGrade = "D";
  passFail = "passed";
} else if (myGrade < 60){
  letterGrade = "F";
  passFail = "did not pass";
}
console.log("You " + passFail + " with a grade of " + letterGrade +".");

```
