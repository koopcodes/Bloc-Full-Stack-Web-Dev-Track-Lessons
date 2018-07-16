UPDATED QUIZ SUBMISSION
Jul 15, 2018 @ 8:00pm
QUIZ SCORE: 8/8

1. Which of these statements does not describe an algorithm?
- An algorithm is a sequence of steps.
- An algorithm must be efficient.<---correct
- An algorithm must complete in a finite amount of time.
- An algorithm is a solution for a specific task.

EXPLANATION
An algorithm is a sequence of logical steps designed to complete a particular task in a finite amount of time. It doesn’t matter if an algorithm is slow or inefficient as long as it still abides by the other three properties.
Covered in: Algorithms: Introduction

2. What is time complexity?
- The number of loops that an algorithm contains.
- The method of finding an algorithm’s efficiency.
- The physical time duration of an algorithm.
- A function that estimates the time an algorithm takes to run.<---correct

EXPLANATION
We write time complexity as a function which approximates the time duration of an algorithm given an input of size n. This way, the behavior of the function can be determined when given a close to infinite input.
Covered in: Time Complexity Basics

3. Is runtime the same as time complexity?
- Yes, but it can also refer to the number of instructions in an algorithm.
- Yes, but it can also refer to the physical time duration of an algorithm.<---correct
- No, it is only the physical time duration of an algorithm.
- No, it is only the number of instructions in an 'algorithm.

EXPLANATION
We often use time complexity and runtime interchangeably. However, the runtime can also refer to the physical duration a particular algorithm takes to run at a given time.
Covered in: Time Complexity Basics

4. What is not part of determining the time complexity of an algorithm?
- The size of the input.
- Considering the worst case scenario.
- Counting the number of parameters a function takes.<---correct
- Counting the number of instructions in the algorithm.

EXPLANATION
The number of parameters doesn’t matter when considering the time complexity of an algorithm. Even if there is more than one parameter, complexity is only concerned with how the function acts as all parameters become infinitely large.
Covered in: Time Complexity Basics

5. If an algorithm has linear growth does it:
- Always takes the same amount of time to run.
- Increase in runtime quickly for small input and taper off.
- Continue to increase at runtime faster than the input size increases.
- None of the above.<---correct

EXPLANATION
The three answers described here are constant, logarithmic, and quadratic (or possibly exponential) time. Linear growth implies that the runtime grows in direct relation to the size of the input.
Covered in: Time Complexity Basics

6. In what way might the choice of algorithm make a difference?
- One solution may be more efficient than another.
- One solution may apply to other scenarios more easily.
- Both of these.<--correct
- Neither of these.

EXPLANATION
All algorithms are not equally fast or useful. There are multiple solutions to most problems, and one algorithm may run faster on a regular basis. In other cases, one algorithm may be applied to multiple situations, like the bow tie example, in which the bow, in addition to the shoelace, may be appropriate to wrap a gift but a surgeon’s knot would not be. If a solution may need to be more broadly applied, one algorithm may be more suited to the task than another.
Covered in: Algorithms: Introduction

7. What is the time complexity of the following algorithm?
```
FUNCTION FindSmallFactors(n)
    FOR i in 2 to 7
        IF n / i has no remainder THEN
            PRINT i + “ is a factor of ” + n
        END IF
    END FOR
END FUNCTION
```
- Linear
- Constant <---correct
- Logarithmic
- Quadratic

EXPLANATION
Even though this algorithm contains a loop, which often indicates linear growth, the loop itself is not dependent on the input and only runs a set amount of instructions.
Covered in: Time Complexity Basics

8. When evaluating three different functions, you have found that one function has n + 1 instructions, a second has 2n instructions, and a third has n log n instructions. List the functions in order of efficiency.

- Both the n + 1 and 2n functions are equally efficient, and the n log n function is less efficient.<---correct
- The n log n function is the most efficient and both the n + 1 and 2n functions are equally but less efficient.
- The function with n + 1 instructions is the most efficient, followed by 2n, and n log n is last.
- The linear function with n + 1 instructions is the most efficient, followed by n log n, and the 2n function is last.

EXPLANATION
The constants represented by n + 1 and 2n do not matter when considering the overall efficiency of the algorithm. They both have linear growth and have equal time complexity, thus they are equally efficient. Log-linear (n log n) time is slower than linear.
Covered in: Time Complexity Basics
