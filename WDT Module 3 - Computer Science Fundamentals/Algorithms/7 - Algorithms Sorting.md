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
    SET swapped = FALSE
    FOR i = indexOfFirstElement to indexOfLastUnsortedElement-1
      IF leftElement > rightElement
        swapElement = leftElement
        leftElement = rightElement
        rightElement = swapElement
        swapped = true
      END IF
    END FOR
  WHILE swapped is TRUE
END FUNCTION
```

2. Write pseudocode for quicksort.
```
FUNCTION quickSort(elementsToSort, lowElementIndex, highElementIndex)
  IF elementsToSort[lowElementIndex] < elementsToSort[highElementIndex] THEN
    SET pivotElementIndex = CALL partitionElements(elementsToSort, lowElementIndex,highElementIndex)
    CALL quickSort (elementsToSort, lowElementIndex, pivotElementIndex)
    CALL quickSort (elementsToSort, pivotElementIndex + 1, highElementIndex)
  END IF
END FUNCTION

FUNCTION partitionElements(elementsToSort, lowElementIndex, highElementIndex)
  SET pivotElement = elementsToSort[lowElementIndex]
  SET leftwall = lowElementIndex
  FOR each elementsToSort with index between lowElementIndex +1 and highElementIndex
    IF elementsToSort[index] < pivotElement THEN
      SET swapElement = elementsToSort[index]
      SET elementsToSort[index] = elementsToSort[leftwall + 1]
      SET elementsToSort[leftwall + 1] = swapElement
      INCREMENT leftwall
    END IF
  END FOR
  SET swapElement = pivotElement
  SET pivotElement = elementsToSort[leftwall]
  SET elementsToSort[leftwall] = swapElement
  RETURN leftwall
END FUNCTION
```

**3. We talked about time complexity in a previous checkpoint, and how to get an idea of the efficiency of an algorithm. After looking at the pseudocode for the above sorting methods, identify why merge sort and quick sort are much more efficient than the others. Walking through each algorithm with a few sample collections may help.**

> A. Quick Sort and Merge Sort have better Average Case and Worst Case time complexity than say the Bubble or Insertion Sorts I think because they split the initial collection into smaller into smaller sections, sorts those smaller smaller subcollections/partitions, then brings them back together in the proper order. This is more efficient than looping through the whole array, especially with something like a bubble sort where it may have to go over some elements in the array multiple times.

**4. All of the sorts addressed in this checkpoint are known as comparison sorts. Research bucket sort and explain how it works. What is the ideal input for bucket sort?**

> A. The Bucket Sort is a distribution sort, so called because it scatters or distributes elements into buckets before sorting the elements in each bucket, finally adding the now-sorted buckets in order back into the original array with all the elements sorted.  For Bucket sorts to be O(n) on average the number of buckets n must be equal to the length of the array being sorted, and the input array must be uniformly distributed across the range of possible bucket values.  If not then the time complexity of Bucket Sort will be dominated by the time complexity of nextSort, O(n^2), giving the Bucket Sort higher time complexity than O(n log(n)) comparison sort algorithms like Quick Sort.
