UPDATED QUIZ SUBMISSION
Jul 12, 2018 @ 11:22am
QUIZ SCORE: 12/12
1. How do you find an item in a linked list?
- Use a hashing function to find the index of the item.
- Starting with the head, check each node following its next until the item is found or the tail is reached.<----correct
- Check each item in the list randomly until all the items have been checked.
- Loop through a range of numbers from 0 through the length of the list, using each number as an index to check for the item.

EXPLANATION
A linked list is a chain of nodes connected using next properties. The first node in a linked list is called the head, and the last node is called the tail. To traverse the list, you start at head and follow each next property to find the next node all the way to the tail at the end.
Covered in: Linked Lists

2. Which one of the following does not describe a queue?
- A group of people waiting to go through a security scanner.
- Packaging materials coming off of a conveyor belt.
- A fulfillment system favoring the newest orders first.<----correct
- They all describe queues.

EXPLANATION
A fulfillment system favoring the newest orders is not a queue, as the last orders to enter (the newest ones) are the first to leave. That describes LIFO ordering (a stack), not FIFO ordering (a queue).
Covered in: Stacks and Queues

3. Which of the following describes information best kept in a data structure?
- An online vehicle listing.
- An employee performance review.
- A list of applicants for a job opening.<---correct
- The primary and secondary emergency contacts for a patient.

EXPLANATION
Data structures are best used to hold a variable amount of similarly grouped data, such as a list of one’s followers on social media. Neither a vehicle listing or a performance review contains such data; each datum held describes a distinct part of the element so classes are more appropriate to model them. And while there is more than one emergency contact, there is a low, finite number of them, making it simpler to hold each datum as a property in a class. The list of applicants is the only information that needs to be kept in a data structure.
Covered in: Introduction to Data Structures

4. How are linked lists stored in memory?
- Nodes are placed in reverse order forming a LIFO structure.
- Nodes are placed at constant intervals (i.e., every third chunk of memory).
- Nodes are spread out in memory in whichever spot is open at the time we create the node.<---correct
- Nodes are placed end-to-end consecutively in one large line of memory.

EXPLANATION
Linked lists are collections of nodes linked together by the properties of each node. Since each node is a distinct object, where it exists in memory depends solely on where the OS decides to put it and is not dependent on the location of other nodes.
Covered in: Linked Lists

5. How is a hash table different than an array?
- A hash table stores its data in consecutive order while an array chooses specific locations in which to place its data.
- A hash table cannot have numeric keys like an array has numeric indices.
- A hash table has string keys while an array has numeric indices.
- A hash table holds key/value pairs while an array only holds values.<---correct

EXPLANATION
Hash tables hold key/value pairs, applying a hashing function to the key to determine where in an internal array to store the pair. While keys are commonly strings, they can be of any type, including numeric values.
Covered in: Hash Tables

6. How is data added to and removed from a stack?
- Data is stored in the order it is added and can be removed from anywhere.
- Data is added to one side and removed from the other.
- Data is stored in an undefined order and can be removed from either side.
- Data is added and removed from the same side.<---correct

EXPLANATION
Stacks implement a LIFO (last-in, first-out) order, which means the most recently added (pushed) item on the stack will be the first item retrieved (popped). So, when you add the numbers 1, 2, and 3 to the right side of a stack in that order, you get the structure like [1,2,3]. For the stack to be LIFO, the items should be retrieved in the order 3, 2, and 1. That means items must be removed from the right side.
Covered in: Stacks and Queues

7. When performing a breadth-first search [on the tree below](https://bloc-global-assets.s3.amazonaws.com/images-SET/data-structures/Difference-between-Binary-Tree-and-Binary-Search-Tree.jpeg), what is the order the nodes are visited? breadth first search
7, 3, 12, 1, 6, 9, 13, 0 , 2, 4, 8, 11, 15, 5, 10, 14 <----correct
7, 3, 12, 9, 0, 11, 13, 14, 5, 2, 1, 15, 8, 4, 10, 6
7, 3, 12, 1, 15, 13, 14, 6, 10, 4, 5, 9, 11, 0, 8, 2
7, 3, 12, 14, 2, 11, 13, 9, 0, 10, 4, 8, 15, 1, 6, 5

EXPLANATION
For a breadth-first search, one node is visited, then each of its children is visited, followed by each of its grandchildren. In a tree, you can think of this as each node in a level being visited before moving on to the next level.
Covered in: Trees and Graphs

8. Which of the following is a characteristic of a binary search tree?
- Every child under a node is greater than the parent node.
- Every node has a node on its left and its right.
- Deleting a node involves merely moving one of its children in its place.
- If you run a depth-first search, you travel the nodes in order by value.<---correct

EXPLANATION
The organization of a binary search tree places every left node smaller than its parent and every right node larger than its parent. That means the leftmost node in the entire tree is the smallest, and each step of a depth-first search will go to the next smallest node, as a depth-first search goes from bottom to top and from left to right. Not every node has to have two children; some nodes only have one, and the leaf nodes have none. Deleting a node from any binary tree involves finding a suitable replacement and ensuring no sub-trees are lost; simply promoting a child does not guarantee both.
Covered in: Trees and Graphs

9. Describe a singly-linked list regarding graph properties.
- Directed, unweighted, and cyclic
- Directed, unweighted, and acyclic <---correct
- Undirected, unweighted, and acyclic
- Directed, weighted, and, acyclic

EXPLANATION
Any kind of linked list is unweighted. Singly-linked lists only allow traveling to the next node, so it is directed. And unlike circularly-linked lists, the tail of a singly-linked list does not travel back to the head making it an acyclic graph.
Covered in: Trees and Graphs

10. Which of the following does not require a data structure?
- Keeping track of incoming HTTP requests.
- Displaying a news feed.
- Creating an easily searchable list of inventory items.
- None of the above.<---correct

EXPLANATION
Each of the tasks listed above requires a data structure of some kind. Incoming HTTP requests can be stored in a queue, and inventory items can be stored in a hash table keyed by their serial number. And while rendering a news feed may not require a data structure, the data for that news feed must be stored somewhere such as an array.
Covered in: Introduction to Data Structures

11. What is the primary purpose hashing?
- Converting arbitrary data into a fixed-length data.<---correct
- Generating the index for a key/value pair in a hash table.
- Converting strings to numeric hash codes.
- Finding a value in a hash table.

EXPLANATION
While b and d require a hashing function to accomplish the task, they are not the primary purpose of a hashing function. And while hashing functions can be used to convert strings to numbers, they can do much more than that. A hashing function can take any kind of data, and the resulting hash code can be interpreted in many ways (as a number, for example). The main feature of the resulting hash code is that it is the same bit-length for any data sent into it.
Covered in: Hash Tables

12. Which algorithm uses a heuristic?
- Dijkstra’s algorithm for finding the shortest path between two nodes.
- The nearest neighbor solution to the traveling salesman problem.<---correct
- A binary search used for locating a specific value in a sorted collection.
- A merge sort used for sorting items in a collection.

EXPLANATION
A heuristic is a best guess at a solution rather than a proven solution. Dijkstra’s algorithm, binary search, and merge sort will all give you the exact result you are looking for every time. The nearest neighbor result, however, will vary in terms of how close to the shortest circuit it finds depending on the data given.
Covered in: Trees and Graphs
