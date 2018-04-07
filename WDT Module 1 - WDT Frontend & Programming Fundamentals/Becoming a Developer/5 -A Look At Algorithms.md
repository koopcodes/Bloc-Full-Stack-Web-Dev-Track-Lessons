<p style="text-align:center; font-weight: bold">WDT - FrontEnd Fundamentals & Programming<br> Module 1 - Becoming a Developer<br>Checkpoint 5 - A Look At Algorithms</p>

# Questions

**Q1: Out of the sorting algorithms introduced, or any others you have encountered, which is the quickest or most efficient in sorting a set of data and why?**
> **A1:** Is this a trick question? ;-) We just touched on several different sort algorithms, a quick Google search will show many more, in fact whole books have been written and careers have been spent examining sorts. From all the decades of thought spent on the topic of sorts I can infer there is no simple easy answer to the question posed here. I would argue the question makes no sense without knowing more about the data set (size, data type, randomness of distribution, nearly sorted, etc.), and how we want it sorted (Ascending, Non-Decreasing, Decreasing, Non-Ascending). Do we care about stability? Are we talking real world performance or a theoretical benchmark? What is the hardware environment on which this will be run? Primarily the amount of RAM with be of concern especially using recursive sorts, but the CPUs clock speed + it's IPC will matter much as well, even the systems disk read/write speeds, all of it will come into play to a greater or lesser degree depending on what is being sorted. All that said, I believe the answer to the question is:
> ### **The fastest sorting algorithm is the one that exploits the peculiarities of your data on your hardware subject to your external constraints. The second-fastest sorting algorithm is the one in the good enough sort library built into the standard JS/ECMAScript library that you didn’t have to write.**

**Q2: Why is Binary Search more efficient than Linear Search for most cases?**
> As the question states, 'in most cases'.  The value of binary search over linear search is predicated on making multiple searches on the same data set. If you start with an enormous unordered data set and only plan to pluck a small number of items from it one time then sorting and performing a binary search will be comparitively slow once you factor in the time to perform the sort for the binary search. The data only needs to be sorted once, however, so if you make multiple searches on the data the overhead for the time spent sorting with be divided over each of the subsequent searches leading to a lower average time spent searching. It will be important to maintain an ordered list throughout the lifetime of the application but if we access it regularly then binary search is a far better way to go.

> If talking about just the actual search portion of the linear vs. binary search algorithms, the linear search will examine each item in order looking for a match with a worst case of checking every single item before finding what you are looking for. A birnary search will have a worst case of having to check half the data set because it can tell (due to the sort) if the current element it is examining is greater or less than what it is looking for which enable the "divide in half then check" functionality in the binary that is the real time saver

**Q3: Code an implementation of Bubble Sort and test it on an integer array of your choice.**
```
var array = [760, 893, 586, 183, 783, 903, 269, 580, 8, 16, 25, 812, 724, 839, 321, 332, 692, 86, 645, 484, 68, 55];

function bubbleSort(array) {
	var swapped;
	do {
		swapped = false;
		for (var i = 0; i < array.length - 1; i++) {
			if (array[i] > array[i + 1]) {
				var temp = array[i];
				array[i] = array[i + 1];
				array[i + 1] = temp;
				swapped = true;
			}
		}
	} while (swapped);
}
bubbleSort(array);
console.log(array);

[8, 16, 25, 55, 68, 86, 183, 269, 321, 332, 484, 580, 586, 645, 692, 724, 760, 783, 812, 839, 893, 903]
```