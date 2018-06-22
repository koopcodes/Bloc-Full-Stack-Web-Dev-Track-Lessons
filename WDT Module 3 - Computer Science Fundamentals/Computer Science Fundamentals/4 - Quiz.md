<p style="text-align: center; font-weight:bold">WDT Module 3 - Computer Science Fundamentals<br>Computer Science Fundamentals<br>Checkpoint 4 - Quiz</p>

QUIZ SUBMISSION
Jun 21, 2018 @ 8:45pm
QUIZ SCORE: 7/7
Why is clean code important?

It improves maintainability
It improves understandability
It reduces bugs in the code
All of the above X

EXPLANATION
Clean code is important for you and anyone that looks at your code in the future. It also makes code easier to maintain and improves code quality, thus reducing the number of bugs in the code.
Covered in: Intro to Clean Coding

What is a characteristic of clean code?

Code that is easy to read X
Code that is highly efficient, performance-wise
Code that is elegant
Code that is clever

EXPLANATION
Clean code should be easy to read. This allows for ease of understanding, especially for other developers who did not write the code. Other characteristics of clean code include readability, ease of maintenance, and simplicity.
Covered in: Intro to Clean Coding

Which of the examples below are clean code?

FUNCTION do(x, y)
    SET z to x * y
    PRINT z
END FUNCTION

X FUNCTION calcAreaOfSquare(length, width)
      SET area to length * width
      PRINT area
END FUNCTION X

FUNCTION calcAreaOfSquare(length, width)   // Create a new function
SET area to length * width                                    // Multiply length times width
PRINT area                                                   // Print area
END FUNCTION

None of the above

EXPLANATION
The code snippet in option b is properly indented, the variables and functions are well named, and the code is easy to understand. Option a uses poorly named variables and functions that are not self-explanatory. Option c is not properly indented and uses excessive and unnecessary code commenting.
Covered in: Intro to Clean Coding

How can the following code snippet be modified to make it cleaner?

FUNCTION getChange(subtotal, tax, payment)
    PRINT “Your payment due is”  subtotal + (subtotal * tax)
    PRINT “Your change due is”  payment - subtotal + (subtotal * tax)
END FUNCTION

Use more code nesting
Apply the DRY principle X
Add more code indentations
All of the above

EXPLANATION
Apply the DRY principle to reduce repeated code. In this example, replace the repeated code, “subtotal + (subtotal * tax)” by assigning it once to a variable (i.e., “total”). We can then use the variable, “total” instead of performing this calculation in multiple places.
Covered in: Intro to Clean Coding

What is pseudocode?
Code that is written for debugging purposes
Code written in a mix of programming languages that can be run on a machine
An informal language that helps programmers to develop algorithms X
None of the above

EXPLANATION
Pseudocode is an informal language that helps programmers to develop algorithms. It is a way to express what the code should do without using a particular language's syntax. Pseudocode is meant to be read by humans rather than machines, so it will not run on a computer.
Covered in: Introduction to Pseudocode

What does the following pseudocode do?

INPUT first number
INPUT second number
SET total to 0
IF second number is greater than 0
    SET total equal to (first number / second number) * 100
    PRINT total

It takes two numbers and prints each out each number
It takes two numbers, calculates a percentage, and prints the results
It takes two numbers and multiples them each by 100 X
None of the above

EXPLANATION
The pseudocode takes two numbers as inputs. It checks that the second number is larger than 0 in order to avoid a divide by zero error. If the second number is greater than 0, the percentage is then calculated by dividing the first number by second number and multiplying by 100.
Covered in: Introduction to Pseudocode

How would you write pseudocode for an algorithm to print out numbers that are divisible by 5?

X SET array to [1,2,3,4,5,6,7,8,9,10]
WHILE number in array
    IF number is divisible by 5 THEN
         PRINT number “ is divisible by 5”
    ELSE
         PRINT number  “ is NOT divisible by 5”
END WHILE
RETURN total X

var array = [1,2,3,4,5]
array.forEach(function(number) {
  if (number % 5 == 0)
    console.log(number + " is divisible by number");
  else
    console.log(number + " is NOT divisible by number");
});

array = [1,2,3,4,5]
for number in array
  if (number % 5 == 0)
    puts "#{number} is divisible by number"
  else
    puts "#{number} is NOT divisible by number"
  end
end

All of the above

EXPLANATION
The pseudocode in option a is a good example of pseudocode. It expresses what the code should do, without using a particular language's syntax.
Covered in: Introduction to Pseudocode
