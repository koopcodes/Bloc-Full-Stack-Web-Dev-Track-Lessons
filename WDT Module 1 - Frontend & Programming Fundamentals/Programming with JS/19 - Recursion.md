<p style = "text-align:center; font-weight:bold">WDT Frontend & Programming Fundamentals<br>Programming in JS<br>Checkpoint 19 - Recursion</p>

# Questions
**Q1: What is recursion?**
> **A1**  Recursion (in computer programming) is the use of a procedure, subroutine, function, or algorithm that calls itself over and over until a termination condition is met. Different from Iteration in that iterative functions do not call themselves.

**Q2: When would a programmer want to write a recursive function instead of an iterative one?**
> **A2:** When a problem consists of many very similar subproblems, the iterative code becomes too complex, or when file size is a concern

**Q3: What is a base case and what is its role in a recursive function?**
> **A3:** A base case is the terminatioon condition referred to in the definition of recursion in Answer 1 above. It provides an exit from the recursion so we don't get stuck in an infinite loop and crash out from a stack overflow

**Q4: What would happen if a programmer did not utilize a base case within a recursive function?**
> **A4:** As alluded to above in Answer 3, without a base case the function will keep calling itself over and over forever or until it's memory space is filled and the stack overflows.
# Code Practice
```
var num = prompt("Of what number do you want the factorial?");
var factorial = function(num) {
    if (num===0) return 1;
    return num * factorial(num-1);
}
console.log(factorial(num));
```