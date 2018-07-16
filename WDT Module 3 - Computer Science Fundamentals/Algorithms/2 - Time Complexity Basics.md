BLOC WDT Module 3 - Computer Science Fundamentals
Section 3 - Algorithms
Checkpoint 2 - Time Complexity Basics

# Exercises

**1. What is time complexity and what is its relation to algorithms?**
> Time complexity is the relation of computing time and the amount of input. This is usually deals with things about the size of an array or an object. Time complexity also isn’t useful for simple functions like fetching usernames from a database, concatenating strings or encrypting passwords. It is used more for sorting functions, recursive calculations and things which generally take more computing time.

**2. What is runtime?**
> The length of time a program takes to run

**3. How is the runtime of an algorithm calculated?**
> Do we mean Runtime or Time Complexity here? The Runtime is unknown until we turn the algorithm into an actual program and run it, but even then Runtime will vary depending on hardware and input size.  I think what you guys are asking for is how to figure the Time Complexity? To determine the time complexity of an algorithm add up how many instructions the algorithm will execute as a function of the size of its input in Big O notation, then simplify the expression to the largest term and drop any constants.

**4. Name the six types of algorithm growth rates we saw in this checkpoint and list them in order of most efficient to least efficient. Now Google another algorithmic growth rate not covered and place it in the correct spot in your list.**
> O(1) = Constant Growth Rate
O(log n) = Logarithmic Growth Rate
O(n) = Linear Growth Rate
O(n log n) = Log-Linear Growth Rate
O(n^2) = Quadratic Growth Rate
O(n^3) = Cubic Growth Rate <----
O(2^n) = Exponential Growth Rate

**5. Choose one of the algorithmic growth rates from the last question and make a comparison to a real-life situation.**
> Logarithmic Growth Rate: With fitness and strength training the “beginner gains” are large and come quickly at first but over time greater and greater effort must be expended to achieve smaller and smaller gains


**6. Determine the time complexity of the following snippet of code. It is commonly known as a linear search.**
```
FUNCTION linearSearch(array, target)
 FOR each number in the array //time complexity n
   IF number = target THEN    //time complexity n
     RETURN true              //time complexity varies between n and 0
   END IF
 END FOR
 RETURN false                 //time complexity 1
END FUNCTION
```
> A. n + n + n +1 = 3n + 1 = O(n)

**7. Determine the time complexity of the following snippet of code.**
If you get stuck, read through the graphical representation section again.
```
FUNCTION foo(array)
 FOR each number in the array    //time complexity n
   FOR each number in the array  //time complexity * n
     print "Hello"               //time complexity 1
   END FOR
 END FOR
END FUNCTION
```
>A. n * n + 1 = n^2 + 1 = O(n^2)

**8. Determine the time complexity of the following snippet of code. It is commonly known as the Fibonacci sequence.**
```
FUNCTION fibonacci(number)
 IF number < 1 THEN                                 //time complexity 1
   ERROR
 ELSE IF number = 1 or 2 THEN                       //time complexity 1
   RETURN 1
 ELSE
   CALL fibonacci WITH number - 2 RETURNING twoBack//time complexity 2^n
   CALL fibonacci WITH number - 1 RETURNING oneBack//time complexity 2^n
   RETURN twoBack + oneBack                        //time complexity 1
 END IF
END FUNCTION
```
>A. 2^n + 2^n + 1 = 2(2^n) + 1 = O(2^n)

**9. Out of the code snippets you just saw, which is the most time efficient?**
> A. The linear Search function would be the most time efficient.
