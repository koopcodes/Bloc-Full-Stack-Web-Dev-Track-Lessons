#### BLOC WDT Module 3 - Computer Science Fundamentals
## Section 3 - Algorithms
# Checkpoint 5 - Algorithms: Searching

## **Short Answer**

1. What is a real-life scenario that uses linear search?
> A. Finding where a particular participant finished a race. At for myself, I don't start looking in the middle, I start at the top and work my way down until I find who I'm looking for in the list

2. What is a real-life scenario that uses binary search?
> A. The way most people search for a word in a dictionary mirrors a binary search somewhat. I usually pull open the dictionary somewhere other than the start or the end, compare where I am to what I'm looking for, and move forward or backward from there accordingly.

3. Given the alphabetically sorted collection in this checkpoint, how many iterations would it take to find the value G using linear search?
> A. 7

4. Given the alphabetically sorted collection in this checkpoint, how many iterations would it take to find the value G using binary search?
> A. 3

5. Given an unsorted collection of a million items, which algorithm would you choose between linear search and binary search? Explain your reasoning.
> A. Binary search is not possible on an unsorted list, so linear

6. Given a sorted collection of a million items, which algorithm would you choose between linear search and binary search? Explain your reasoning.
> A. For a SORTED data set that large I would use a binary search for sure. Binary searches work with sorted collections and with linear search the worst case would be O(n) but binary search case only O(log n)

## **Programming Assignment:**
1. You and a friend have set a wager to see who can find the word "Albatross" in the dictionary the fastest. Write a program to allow you to win the bet.
> A. Since the dictionary is already sorted, and the word sought may change in the future I would implement a binary search even though in this case a linear search may be faster since Albatross is close to the front of the dictionary.

```javascript
function wordSearch(arrayToSearch, wordToFind) {
  var lowElement = arrayToSearch[0];
  var highElement = arrayToSearch[arrayToSearch.length - 1];

  while (lowElement <= highElement) {
    var middleElement = (arrayToSearch.indexOf(lowElement) + arrayToSearch.indexOf(highElement)) / 2;
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

var dictionary = ['Albatross','Baboon','Cat','Dog','Egret','Falcon','Gorilla','Hare','Incubus','Jellyfish','Killer Whale'];
wordSearch(dictionary, 'Albatross');
```

2. You work at a pet store, and a child has asked you to net the only white-spotted goldfish from the fish tank. Write a program that will help you net the right fish.
> A. Since the fish tank is unsorted we will have to use a linear search
```javascript
function findFish(fishesToSearch, fishToFind) {
  for (var i = 0; i < fishesToSearch.length; i++) {
    if (fishesToSearch[i] === fishToFind) {
      return "You netted a " + fishToFind + " from the fish tank";
    }
  }
  return "There is no " + fishToFind + " in the tank";
}

var fishTank = ['goldfish','goldfish','green swordtail','commmon molly','goldfish','platy','white-spotted goldfish','platy','common molly','goldfish'];

findFish(fishTank, 'white-spotted goldfish');
```
