#### BLOC WDT Module 3 - Computer Science Fundamentals
## Section 3 - Algorithms
# Checkpoint 7 - Algorithms: Sorting

## Exercises
For exercises requiring code, you are free to use the language of your choice.

Create a file named algos_sorting_answers.txt and answer these questions in it:

1. Write pseudocode for bubble sort.
```
FUNCTION bubbleSort(elementsToSort)
DO
  SET swapped to FALSE
  FOR i = indexOfFirstElement to indexOfLastUnsortedElement-1
    IF leftElement > rightElement
      swapElement = leftElement
      leftElement = rightElement
      rightElement = swapElement
      swapped = true
    END IF
  END FOR
WHILE swapped is TRUE
```

2. Write pseudocode for quicksort.

3. We talked about time complexity in a previous checkpoint, and how to get an idea of the efficiency of an algorithm. After looking at the pseudocode for the above sorting methods, identify why merge sort and quick sort are much more efficient than the others. Walking through each algorithm with a few sample collections may help.

4. All of the sorts addressed in this checkpoint are known as comparison sorts. Research bucket sort and explain how it works. What is the ideal input for bucket sort?
