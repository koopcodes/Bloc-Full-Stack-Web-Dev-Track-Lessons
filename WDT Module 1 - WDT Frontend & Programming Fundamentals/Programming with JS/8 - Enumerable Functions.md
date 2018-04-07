<p style="text-align: center">**WDT Frontend & Programming Fundamentals**<br>
**Programming with JS**<br>
**Checkpoint Eight - Enumerable Functions**</p>
> **Q1:  Describe a `map` method?**

**A1: ** For example:
```
var amounts = [100, 200, 300, 400, 500];
var oneTenth = amounts.map(item => item / 10);
console.log(amounts);
console.log(oneTenth);
```
(5) [100, 200, 300, 400, 500]
(5) [10, 20, 30, 40, 50]

After creating the array `amounts`, the `map` method is used to iterate over each element in `amounts`, dividing it by 10, then placing the result in a new array `oneTenth`

> **Q2: Describe a `filter` method?**

**A2: **
```
var array = [10, 20, 30, 40, 50];
var oneTenthLessThan4 = array.filter(item => (item/10) < 4);
console.log(array);
console.log(oneTenthLessThan4);
```
(5) [10, 20, 30, 40, 50]
(3) [10, 20, 30]

After creating the array `array`, the `filter` method is used to iterate over each element in `array`, evaluating each to determine if 1/10th of it's numerical value is less than 4, removing any elements for which that condition evalautes to `false`, and placing those that are `true` in a new array `oneTenthLessThan4`

> **Q3: What is the difference between the `map()` and the `filter()` function?**

The `map` method allows us to transform or modify the elements of a source array.  The `filter` method does not transform or modify, only removes an element if the condition evaluates as `false`

**Code Practice**
```
var numbers = [1,2,3,4,5,6,7,8,9,2,3,4,5,6,1,2,3,4,5,6,7,8,8,4,3,2];
var filteredTotal = numbers
	.filter(item => (item>=4))
    .reduce((filteredTotal, item) => filteredTotal + item);
console.log(numbers);
console.log(filteredTotal);

```
