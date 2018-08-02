<p style="text-align: center">**WDT Frontend & Programming Fundamentals**<br>
**Programming with JS**<br>
**Checkpoint Five - Arrays**</p>

**_Questions_**
> **Q1: Describe an array**

**A1:** An `array` is a list of values stored in a single variable using a numbered index

> **Q2: In JavaScript can you have a single array with a String and a Number in it?**

**A2:** Yes, because javaScxript is 'loosely' or 'weakly' typed, and you don't have to tell the JS engine what type of data (`int`, `float`, `char`, `string`, `array`, etc.) you are going to store in a variable, and you can change it just by changing what you store in it. But as we are sort of cautioned at the very end, you need to be careful when you mix data types in an array because you can get some weird results depending on what you are trying to do....like is `'eight' + 50` = `NaN`? `58`? `eight50`? The last, `eight50`, is the case so yes be careful with how you assume JavaScript will convert mis-matched data types

> **Q3: In JavaScript do arrays start at index 0 or index 1?**

**A3:** In JavaScript, arrays are 'zero indexed'.

**Code Practice**

```
var clothes = ['collared shirt', 'shirt'];
clothes.push('pants');
console.log(clothes);
```
