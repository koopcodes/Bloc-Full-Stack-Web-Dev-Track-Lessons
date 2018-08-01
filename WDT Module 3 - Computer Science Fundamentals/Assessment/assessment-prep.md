# WDT Module 3 Assessment Prep

Similar to previous assessments using a google hangouts room with recorded video. 10 questions, Pass/Fail, must get 70% or better to pass.

4 Questions Verbal
- Linked Lists vs Arrays Pros/Cons

|Array|LL|
|-----|---|
|Easy to use| Comlpex to Use  |
|Fast constant-time access| No constant-time access  |
|fixed size| dynamic size|
|One block insertion | can use fragmented memory  |
|complex position based insertion| insert at constant-time  |
| Best for a multidimensional structure, or the number of elements is known in advance and will remain consistent | Best for one dimensional data, and the number of elements is unknown or is expected to change often |
| The least overhead for data searched and accessed often but changes infrequently | Versatility for regularly adding or subtracting elements, especially to maintain a sorted order |

- Binary Search Tree - describe how to search
```
Compare data to root node data

If data less than root data move left

If data more than root data move right

Else data found!
```

add,
```
Compare data to root node data

If data less than node data move left, AND if no left node insert new node

If data more than node data move right, AND if no right node insert new node
```
delete
```
Compare data to root node data

If data less than root data move left

If data more than root data move right

Once found:
- if no left or right node set node null(Node to be deleted is leaf: Simply remove from the tree)
- if no left node set node = to right node(Node to be deleted has only one child: Copy the child to the node and delete the child)
- if no right node set node = to left node(Node to be deleted has only one child: Copy the child to the node and delete the child)
- if two children, set node = child with lowest value in right subtree and delete the child
```

- Time and Space Complexity - what they are, how to figure O(n)
> In general, doing something with every item in one dimension is linear, doing something with every item in two dimensions is quadratic, and dividing the working area in half is logarithmic


- RDBMS - structures and how they fit together

|Term |	Definition |
|-----|------------|
|Table	|A collection of related data held in a structured format|
| Row	|A single, implicitly structured data item in a table|
| Column|A set of data values of a particular simple type, one value for each row|
|Value|A representation of data contained in a Cell|

3 Questions Look at Code
- tell what it outputs
- tell what is wrong

3 Questions Write Code
- SQL
Sun Can Find The World Cold
Select Column From Table While Condition
```
 CREATE TABLE products (
      id integer,
      name text,
      price numeric(5, 2)
  );
```

```
 INSERT INTO products (id, name, price)
 VALUES
  (11773, 'South Face Jacket', 174.99),
  (11774, 'Big Mountain 2-Person Tent', 219.99),
  (11775, 'King Cole Camp Stove', 34.99),
  (11776, 'Oregon Trail Mountain Bike', 579.99);
```

```
INSERT INTO users (name, newuser, active) VALUES ('John Smith', TRUE, FALSE);
```

```
UPDATE products SET price=209.99 WHERE id=11774 AND name='Big Mountain 2-Person Tent;'
```
```
DELETE FROM products WHERE id=11776;
```

```
ALTER TABLE products ADD COLUMN description text SET DEFAULT 'None';
ALTER TABLE products DROP COLUMN description;
DROP TABLE products;
```

- Sort
Insertion Sort:
At #1, we instantiate sortedCollection and add the first item from collection, and then remove that item from the original collection.
`SET sortedCollection = [FIRST element in collection]`
`REMOVE FIRST element from collection`
At #2, we iterate over sortedCollection to insert the element in the proper place. We break after we find the index at which the element belongs.
`SET sortedCollectionIndex to FIRST INDEX of sortedCollection #`
`WHILE sortedCollectionIndex < LAST INDEX of sortedCollection`
At #3, if value is less than or equal to sortedCollection[sortedCollectionIndex], it's inserted into sortedCollection at sortedCollectionIndex.
`IF value <= sortedCollection[sortedCollectionIndex] THEN`
`INSERT value INTO sortedCollection AT sortedCollectionIndex EXIT WHILE`
At #4, if we reach the last index of sortedCollection, we append value to  sortedCollection.
`ELSE IF sortedCollectionIndex = LAST INDEX of sortedCollection + 1 THEN`
`APPEND value TO sortedCollection`

Selection Sort:
At #1, we start iterating over the collection;
`FOR i = FIRST INDEX of collection to LAST INDEX of collection - 1`
At #2, the outer loop assumes that the minimum value is the current index, i, by setting min_index to i.
`SET minIndex to i`
At #3, we see a nested loop that iterates over everything after, or to the right of, i. This loop is considered the "inner loop."
`FOR j = (i + 1) to LAST INDEX of collection`
At #4, we iterate over the remaining unsorted part of collection. If we see an item that is less than the current minimum, (collection[minIndex]), then we set minIndex to j.
`IF collection[j] < collection[minIndex] THEN`
`SET minIndex to j END IF END FOR`
At #5, this is where the swap happens.
`SET tmp to collection[i]`
`SET collection[i] to collection[minIndex]`
`SET collection[minIndex] to tmp`
`END FOR RETURN collection`

Bubble Sort:
At #1, we start making our passes through the collection using a begin/end until loop.
`REPEAT`
`SET swapped to false`
At #2, we iterate over collection FIRST INDEX to LAST INDEX - 1 times. Bubble sort loops until it finds no more items to swap, so we must iterate over the entire collection for each pass.
`FOR i = FIRST INDEX of collection to LAST INDEX of collection - 1`
At #3, if the item at i is greater than the item at i + 1, then swap them.
`IF collection[i] > collection[i + 1] THEN`
         `SET tmp to collection[i]`
         `SET collection[i] to collection[i + 1]`
         `SET collection[i + 1] to tmp`
         `SET swapped to true`
       `END IF`
     `END FOR`
   `UNTIL swapped is FALSE`
  `RETURN collection`
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

Merge Sort:
At #1, we return the collection if the size is less than or equal to one. We always consider a collection of one item to be sorted.
`IF collection length <= 1 THEN RETURN collection`
At #2, if collection's size is greater than one, it is split in half. mid is assigned to the middle index. left is assigned to the result of a recursive call to  mergeSort(FIRST INDEX to mid - 1 elements of collection) which is the left-hand side. Similarly, right is assigned to mergeSort(mid to LAST INDEX elements of collection) which is the right-hand side of collection.
`ELSE`
     `SET mid to ROUND DOWN((LAST INDEX of collection - FIRST INDEX of collection) / 2)`
     `CALL mergeSort WITH FIRST INDEX to mid - 1 elements of collection RETURNING left`
     `CALL mergeSort WITH mid to LAST INDEX elements of collection RETURNING right`

At #3, mergeSort calls a helper method, merge(left, right). merge contains the sorting logic.
`CALL merge WITH left AND right RETURNING the new collection END IF END FUNCTION`

At #4, we initialize a loop that runs while both left and right have elements. If the first element in left is less than or equal to the first element in right, the element from left is appended to collection and removed from left. Otherwise, we append the first element from right to collection and remove that element from  right.
`WHILE left AND right are NOT empty`
    `IF FIRST element of left <= FIRST element of right THEN`
      `APPEND FIRST element of left to collection`
      `REMOVE FIRST element of left from left`
    `ELSE IF FIRST element of left > FIRST element of right THEN`
      `APPEND FIRST element of right to collection`
      `REMOVE FIRST element of right from right`
    `END IF END WHILE`

At #5, if any elements remain in the left collection after the merge, they are appended to the end of collection.
`IF left is NOT empty THEN
    APPEND left to collection
   END IF`

At #6, likewise, if there are any elements in the right collection after the merge, they are appended to the end of collection.
`IF right is NOT empty THEN
    APPEND right to collection
   END IF`

Quick Sort:
Pick a pivot point.
Compare each item to the pivot point, if it is greater than the pivot point then move it to the right of the pivot point.
Repeat steps one and two with each unsorted sub-collection.
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

- Search
linear
```
function findFish(fishesToSearch, fishToFind) {
	for (var i = 0; i < fishesToSearch.length; i++) {
		if (fishesToSearch[i] === fishToFind) {
			return "You netted a " + fishToFind + " from the fish tank";
		}
	}
	return "There is no " + fishToFind + " in the tank";
}

findFish(fishTank, 'white-spotted goldfish');
 ```

 Binary Search (must be sorted)
 ```
 function wordSearch(arrayToSearch, wordToFind) {
	var lowElement = arrayToSearch[0];
	var highElement = arrayToSearch[arrayToSearch.length - 1];

	while (lowElement <= highElement) {
		var middleElement =
			(arrayToSearch.indexOf(lowElement) + arrayToSearch.indexOf(highElement)) /
			2;
		middleElement = Math.round(middleElement);

		if (arrayToSearch[middleElement] > wordToFind) {
			highElement = arrayToSearch[middleElement - 1];
		} else if (arrayToSearch[middleElement] < wordToFind) {
			lowElement = arrayToSearch[middleElement + 1];
		} else {
			return arrayToSearch[middleElement];
		}
	}
	return 'That name is not in the list';
}
```
