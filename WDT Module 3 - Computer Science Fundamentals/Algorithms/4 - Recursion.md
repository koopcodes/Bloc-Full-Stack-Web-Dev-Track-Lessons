## BLOC WDT Module 3 - Computer Science Fundamentals
## Section 3 - Algorithms
# Checkpoint 4 - Recursion

**Exercises**

For exercises requiring code, you are free to use the language of your choice.

1. Define and compare recursion and iteration.
> Both **Recursion** and **Iteration** allow us to repeatedly execute an instruction set, but **Recursion** does this by having a function call itself repeatedly whereas **Iteration** is when a loop executes repeatedly until the controlling conditional statement becomes false. **Recursion** is always applied to a function, but **Iteration** is applied to the set of instructions we want repeated.

2. Name five algorithms that are commonly implemented by recursion.
> A: Fibonacci sequence, merge sort, quick sort, factorial, binary tree

3. When should you use recursion, and when should you avoid recursion? Give examples for each.
> A. Recursion is for when an algorithm can be defined as a combination of sub-results and when you have known starting cases. Like when you're calculating a factorial. Avoid recursion when running straight through a date set and when base cases are unknown like trying to find the maximum value in an array of numbers for example

4. Compare the recursive and iterative solutions to the three algorithms from the checkpoint (Factorial, Maximum, and Fibonacci). What is similar, and what is different?
> A. The iterative and recursive solutions to all three algorithms are similar in that the both iteration and recursion provide identical and correct results.  Differences include a noticable difference in some of the actual physical runtimes (number of time units for which the programs runs), but for me the biggest difference was in the readability of the code. Certain algorithms just seemed to make more sense and what was going on more easily understood when wrotten recursively and other when written iteratively. For example, looking at the recursive factorial algorithm I was able to grasp what was going on and how it was working to achieve the output more quickly than when I read the interative factorial algorithm. On the flip side running through a data set like with the maximum problem I found the iterative maximum algorithm more easily followed and understood than the recursive maximum algorithm.

5. Given a multi-dimensional collection (such as an array) where the number of dimensions is unknown, write a recursive algorithm to count the number of items in the entire collection.

[Recursive Multidimensional Array Count](https://repl.it/@koopdev/Recursive-Multidimensional-Array-Count)
```javascript
var elementCount = 0;

function countArrayElements (array) {
  if (!Array.isArray(array)) {
    elementCount ++;
  }
  for (let i = 0; i < array.length; i++) {
    countArrayElements(array[i]);
    }
	return elementCount;
}

var multiDimensionalArray = [[10,9,8,[7,6,5,[4,3,2],1]],[2,9,4],[7, [5, 2, 9], [8, 9],[[10, 11, 12],[13, 14, 15], 16]]];
countArrayElements(multiDimensionalArray);
```

6. A palindrome is a word or phrase whose spelling is the same either direction (e.g., racecar). Write a recursive algorithm to determine if a given word or phrase is a palindrome.

[Is Palindrome Function: Recursive and Iterative](https://repl.it/@koopdev/isPalindrome-Reverse-Word-by-StackArray)
```javascript
function isPalindromeRecursive(testString) {
  var testStringLength = testString.length;
  if (testStringLength === 0 || testStringLength === 1) {
    return true;
  }

  if (testString[0] === testString[testStringLength - 1]) {
    return isPalindromeRecursive(testString.slice(1, testStringLength - 1));
  }
  return false;
}

isPalindromeRecursive('racecar'); //true
```

7. Laura and Xander are going door-to-door around their block looking for their lost cat. Write a recursive algorithm showing one way they can visit every house on their block exactly once.

[Recursive Check All Houses](https://repl.it/@koopdev/Recursive-Check-All-Houses)
```javascript
function checkHouses(houses){
    if(houses.length === 0){
        return "All houses checked";
    } else {
      console.log(houses.length + ' more to check');
        return checkHouses(houses.slice(1));
    }
}

checkHouses(["My House", "Your House", "Their House", "Her House", "His House", "It's House"]);
```
