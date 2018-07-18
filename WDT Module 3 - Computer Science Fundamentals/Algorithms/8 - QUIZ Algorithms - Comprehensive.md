UPDATED QUIZ SUBMISSION
Jul 17, 2018 @ 10:03pm
QUIZ SCORE: 12/12

1. Can you perform a linear search on an unordered list?
- Yes, and the efficiency stays the same.<---correct
- Yes, and the efficiency decreases.
- Yes, and the efficiency increases.
- No, to perform a linear search the items must be sorted.

EXPLANATION
The efficiency of a linear search does not change if the items are sorted or unsorted, but it is preferable to use unsorted collections if there is no predictable way to find the item.
Covered in: Algorithms: Searching

2. Which of these is not a step in a binary search?
- Looping until the item is found or low point becomes higher than the high point.
- Checking if the item is less than the high value.
- Setting a new low, mid, and high point.
- Checking if the item is less than the low value.<---correct

EXPLANATION
The comparison against the low value should be greater than, not less than. The item being searched for should always be between the high and low value.
Covered in: Algorithms: Sorting

3. When is a binary search more efficient than a linear search?
- In all cases
- When the array is not sorted
- When the array is sorted<---correct
- Never

EXPLANATION
A binary search requires a sorted array, but the search is much faster than a linear search. If the array is unsorted, we cannot use binary search.
Covered in: Algorithms: Searching

4. What is the fundamental difference between Merge Sort and Quick Sort?
- Quicksort uses a pivot value to partition the array, and merge sort simply splits the array in half.<---correct
- Quicksort builds a max heap to sort the data, and merge sort uses a pivot value to partition the array.
- Quicksort uses a pivot value to partition the array, and merge sort builds a max heap to sort the data.
- Quicksort builds a maximum heap to sort the data, and merge sort simply splits the array in half.

EXPLANATION
Quicksort’s main feature is to pick a partition value and then organize the groupings on either side of the partition, and perform this recursively on either side of the partition until it is sorted. A merge sort splits the array objectively in the middle recursively until there is only one item in each group, and then merges each group until the entire array is rebuilt.
Covered in: Algorithms: Sorting

5. Which control flow techniques (e.g., for loops, while loops) would most likely be used to implement selection sort?
- A single FOR loop to iterate through the collection and select the correct next item.
- Nested FOR loops to iterate through the collection and select the correct next item.<---correct
- A single FOR loop with IF statements to select the correct next item.
- A WHILE loop to iterate through the collection and select the correct next item.

EXPLANATION
Selection sort requires nested for loops to perform the sort. For each place in the array, it goes through the collection to select the lowest item, so both loops are needed.
Covered in: Algorithms: Sorting

6. Which kind of sort is the most efficient?
- Bubble sort.
- Merge sort.<---correct
- Insertion sort.
- Selection sort.

EXPLANATION
Merge sort is the only sort on the list that significantly improves upon other searches. All of the other searches require going through the collection many times to make sure it ends up sorted, and merge sort can minimize that by its divide and conquer nature.
Covered in: Algorithms: Sorting

7. Which of these is an example of an algorithm?
- Pandora’s song prediction.<---correct
- Listening to the radio.
- Browsing Facebook.
- Texting a friend.

EXPLANATION
Only Pandora’s song prediction, which is a specific calculation based on previous songs and ratings, can be considered an algorithm, as it runs for a finite amount of time for each song. The other three options can continue for an indeterminate amount of time and thus cannot be considered an algorithm.
Covered in: Algorithms: Introduction

8. What is runtime?
- The physical time duration of an algorithm.
- A function that estimates the time it takes for an algorithm to run.
- Both of these.<---correct
- Neither of these.

EXPLANATION
Runtime can be the physical time duration of an algorithm, or it can be a function that estimates the time it takes for an algorithm to run, also known as time complexity.
Covered in: Time Complexity Basics

9. Which of these do we consider when estimating time complexity?
- The worst-case scenario.<---correct
- The average scenario.
- The best case scenario.
- All scenarios.

EXPLANATION
When estimating the time complexity, we take a look at how the algorithm performs as the input grows very large. Also, we must consider what happens if the item is the last in a list. For instance, in a search we assume that the item is found last and not first.
Covered in: Time Complexity Basics

10. Order the following time complexities from the most efficient to the least efficient: quadratic, exponential, linear, constant, logarithmic, and log-linear.
- Constant, logarithmic, log-linear, linear, exponential, quadratic.
- Constant, logarithmic, linear, log-linear, quadratic, exponential.<---correct
- Constant, log-linear, linear, logarithmic, quadratic, exponential.
- Constant, logarithmic, log-linear, linear, exponential, quadratic.

EXPLANATION
An algorithm that has constant growth always takes the same amount of time to run. The other types grow as a function of n, the input. For logarithmic, it’s log n, for linear its n, and for log-linear, it’s n log n. Quadratic is n^2, and exponential is 2^n. If you graph these functions, you will see that logarithmic time complexity grows the slowest, then linear, etc., which indicates the order of efficiency.
Covered in: Time Complexity Basics

11. Which of the options below is not a benefit of using iteration over recursion?
- Efficiency.
- Better use of computer resources.
- Simplicity and ease of understanding.<---correct
- There is never a benefit to using recursion.

EXPLANATION
Some algorithms are very hard to visualize iteratively, but can be made much simpler by thinking about the base cases and writing them recursively. Recursive algorithms use more resources but are sometimes much easier to read.
Covered in: Recursion

12. Is a base case required to write a recursive algorithm?
- No, the base case is only suggested and not required.
- Yes, if there is no base case, the algorithm will continue to run forever.<---correct
- No, the base case is only required if there is more than one exit to the algorithm.
- Yes, but multiple base cases must be defined.

EXPLANATION
A base case is required in order to write a recursive algorithm. It doesn’t matter how many there are, although there are usually just one or two. If there is no base case defined, the algorithm will keep calling itself over and over with no exit.
Covered in: Recursion
