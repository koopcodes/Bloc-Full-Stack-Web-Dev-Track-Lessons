QUIZ SCORE: 7/7

1. Which of the following are necessary to build a linked list?

>A head node that references the first node in the list.
A reference for each node that points to the next node.
The data contained in each node.
All of the above.--->correct
EXPLANATION
To build a linked list, create a reference to the first node in the list, also known as the head. Each node in the list will contain a piece of data as well as a reference that points to the next node in the list.
Covered in: Linked Lists

2. Comparing arrays to linked lists, which of the following statements are false?

>Array elements can be accessed by index, but linked lists elements cannot
Both array and linked lists entries exist in consecutive memory locations-->correct
Linked lists elements may exist anywhere in physical memory
None of the above
EXPLANATION
In contrast to arrays, elements in linked lists are not stored consecutively in memory. Therefore we must start from the beginning of the linked list and search through each element until we find the element we are looking for.
Covered in: Linked Lists

3. What is an ideal scenario for using a linked list?

> When the number of elements is unknown and expected to grow or shrink-->correct
When the number of elements is known and not expected to change dramatically
When there are only a few elements to store
None of the above
EXPLANATION
Linked lists are ideal data structures for storing data when we do not know the expected size of the data. Nodes can be added or removed dynamically. Since each node is independent in memory, the operating system may efficiently use any available memory location to store it. Linked lists may grow to immense sizes, as opposed to an array, in which elements would need to be rearranged to make room for new data.
Covered in: Linked Lists

4. Which of the following is a characteristic of a queue?
> A data structure that can only contain numbers.
The first item inserted is the first to be removed.-->correct
The last item is pushed onto the top and also removed from the top.
None of the above.
EXPLANATION
The queue data structure uses the FIFO priority. Therefore, items inserted first will also be removed first.
Covered in: Stacks and Queues

5. What is a stack?
> A data structure that implements LIFO priority.-->correct
A data structure that implements FIFO priority.
A data structure with elements that can be accessed by index.
A data structure with elements that can be accessed by pointers.
EXPLANATION
The stack data structure implements a LIFO priority collection. It provides two functions: push and pop. push adds an element to the top of the stack, and pop removes the top-most element.
Covered in: Stacks and Queues

6. Which of the following analogies best resembles a stack data structure?

> An apartment mailbox consisting of a row of individual mailboxes.
A line of customers at a grocery store.
A pile of plates at a buffet table.-->correct
None of the above.
EXPLANATION
A pile of plates at a buffet table resembles the stack in its LIFO ordering. Plates that are stacked last are the first to be removed.
Covered in: Stacks and Queues

7. What are some ideal applications for stacks and queues?

> A queue can be used to in a program to keep track of customers’ orders.
A stack can be used to store a program’s function calls in a computer’s memory.
A queue can be used by a server to maintain pending jobs in order.
All of the above.-->correct
EXPLANATION
All of the above are ideal applications for stacks and queues. A queue is ideal for any application where there is a need to preserve the ordering of the data. A stack is ideal for any application where the latest piece of data or code snippet is needed first. Once used, the data or code is no longer needed and therefore “popped” off.
Covered in: Stacks and Queues
