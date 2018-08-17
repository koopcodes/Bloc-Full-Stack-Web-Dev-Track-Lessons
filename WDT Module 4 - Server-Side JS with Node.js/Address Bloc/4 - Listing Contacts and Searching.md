#### WDT Module 4 Server-side JS with Node.js
### Section 2 - Address Bloc
## Checkpoint 4 - Listing Contacts and Searching

# Exercises

For the following situations, determine which search approach to use and why would you take that approach. Write your answers in the submission box below.

IN GENERAL, a binary search will be faster than a linear iterative search (O(log(n)) vs. O(n)) BUT as we know a list must be SORTED in order for a binary search to work and when examining the case of a binary search we must include the time to sort in the general case of an unsorted list. While a binary search is faster than linear search the entire operation MAY OR MAY NOT be faster once we add in the time to sort the list first in the case of the binary search. Also depends on how we are going to use our database....if we are only going to pull out a few items from our list once then perhaps linear iterative search would be fastest, but if we are going to search for many items over and over the length of time needed to sort becomes averaged over the total number of uses and eventually becomes negligible in comparison to the repeated use of the search. THEREFORE which search method is more efficient really depends on (n) the amount of records AS WELL AS THE INTENDED USE CASE.  In the case of only a few records (<64) or a limited number of ssearches a linear search would probably be quicker than sort + binary search, whereas for large (n) or cases where we will be making many search queries sort + binary search is the way to go.

1. Performing a search of a sorted by name IRS database for a taxpayer name
> Binary Search.  The list is already sorted AND has a huge number of records so O(log(n)) binary search will really pay off over O(n) iterative linear search.

2. Searching through an unsorted list containing the days of the weekend
> Unsorted list of small size: Linear Iterative Search. It would take longer to sort then binary search than just to use the linear search in the first place.

3. Given a list of the planets in the Milky Way in ascending order by size, search for a planet with a given size.
> Binary Search. List >64 items in length, and it's already sorted.

4. Searching for a checkpoint name in an unsorted list of Bloc checkpoints
> It says unsorted which usually means Iterative Linear Search but I'm going to say Binary Search even though it is unsorted because the list of Bloc Checkpoints easily numbers in the hundreds and assuming repeated accesses will follow it would, in the long run, be most efficient to run a sort on the list and use binary search from there.
