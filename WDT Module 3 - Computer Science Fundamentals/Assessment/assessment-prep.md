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
|complex poistion based insertion| insert at constant-time  |
| Best for a multidimensional structure, or the number of elements is known in advance and will remain consistent | Besy for one dimensional data, and the number of elements is unknown or is expected to change often |
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

If data less than root data move left, AND if no left node insert new node

If data more than root data move right, AND if no right node insert new node
```
delete
```
Compare data to root node data

If data less than root data move left

If data more than root data move right

Once found:
- if no left of right node set node null
- if no left node set node = to right node
- if no right node set node = to left node
```

- Time and Space Complexity - what they are, how to figure O(n)


- RDBMS - structures and how they fit together

3 Questions Look at Code
- tell what it outputs
- tell what is wrong

3 Questions Write Code
- SQL
- Sort
- Search
