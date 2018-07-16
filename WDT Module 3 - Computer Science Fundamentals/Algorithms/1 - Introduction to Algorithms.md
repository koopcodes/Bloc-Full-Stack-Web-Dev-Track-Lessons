BLOC WDT Module 3 - Computer Science Fundamentals
Section 3 - Algorithms
Checkpoint 1 - Introduction to Algorithms

# Exercises

**1. Using proper pseudo-code, describe the following primitive algorithms:**

> - Making coffee
```
BEGIN FUNCTION makeCoffee
  IF pot is NOT clean
    CLEAN pot
  END IF
  IF ground coffee on hand < ground coffee needed
    GET more coffee
  END IF
  IF no filter in basket
    Put filter in basket
  END IF
  PUT coffee in filter AND filter in basket AND basket with pot
  START heating
  WHILE coffee is not brewed
    keep brewing coffee
  END WHILE
  POUR cuppa
  DRINK cuppa
  CODE! :-)
END FUNCTION
```

> - Washing dishes
```
BEGIN FUNCTION washDishes
  IF sink not plugged
    plug sink
  END IF
  IF water not hot
    turn on hot water
  END IF
  WHILE sink is not full of water
    Increment water
  END WHILE
  STOP water
  ADD soap to water
  FOR each dirty dish
    put dish in water
    wash dish
  END FOR
  FOR each dish in sink
    IF dish is clean
      rinse dish
      dry dish
      put dish up
    ELSE
      GOTO FOR each dirty dish loop
    END IF
  END FOR
END FUNCTION
```

> - A choice of your own.
```
START FUNCTION makeSandwich
  IF bread, turkey, mustard, lettuce > bread, turkey, mustard, lettuce needed
    PUT mustard and 2 slices of turkey on slice 1
    PUT swiss cheese and lettuce on slice 2
    PRESS the 2 slices together
    CUT in half
  ELSE get more bread, turkey, mustard, lettuce
  END IF
END FUNCTION
```

**2. As with the knot algorithm, there may be more than one way to solve the problem. It is essential to try to pick the best algorithm for a situation. Name three companies who created an algorithm that made them successful, e.g., Google's search algorithm. It doesn't need to be a tech example (such as a recipe or manufacturing a product). Google's algorithm produces more relevant results than other search engines; what about each of your cases make them stand out?**
+ McDonald's Restaurants - Their algorithm guarantees consistency. Walk into any McDonald's in the world and you know exactly what you are going to get which can be a comfort to travelers far from home unsure about local options.
+ Marvel Studios - As above, despite using many different writers and directors Marvel superhero movies have a consistency, a trademark mix of action and comedy present from film to film, as well as a consistency to the universe in which they all take place that again, like above, gives people a sense of familiarity with the product that may tilt the scales when faced with other unfamiliar options
+ Ford Motor Company, circa 1903. Ford implemented a new manufacturing algorithm called the assembly line that not only made automobile manufacturing cheaper and faster but as with the two previous examples it guaranteed a CONSISTENTLY high quality product so people felt comfortable buying Ford's because they knew what they were getting would be a good as every other one

**3. Hypothesize about what constitutes an efficient algorithm versus an inefficient algorithm.**
An efficient algorithm will produce consistently high quality results in an minimum amount of time, and indeed time complexity and runtime is the de facto standard for comparing algorithms. BUT...The most efficient algorithm may vary based on the size of the input set as well as the available memory and CPU resources.  Indeed one size does not fit all, and there are reasons why we have so many ways to skin a cat in our toolbox
