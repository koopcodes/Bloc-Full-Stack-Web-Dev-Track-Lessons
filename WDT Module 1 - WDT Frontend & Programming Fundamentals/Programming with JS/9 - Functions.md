<p style="text-align: center; font-weight:bold">WDT Frontend & Programming Fundamentals<br>Programming with JS<br>Checkpoint Nine - Functions</p>

**Q1: Describe/define DRY and why functions exist?**

> **A1:** **D.R.Y.** **D**on't **R**epeat **Y**ourself<br>"Every piece of knowledge must have a single, unambiguous, authoritative representation within a system"<br>
A principle in programming that holds everything should be represented once, variables, functions, objects, databases schemas, test plans, the build system, even documentation. When used properly it keeps modication of any single element from affecting any logically unrelated elements, and elements that are logically related all change predictably, uniformly, and in sync.  It saves time, and in another era when storage and memory were more scarce, it saved space as well. The alternative is **W.E.T.** solutions, **W**e **E**njoy **T**yping, or **W**rite **E**verything **T**wice

> Functions exist to support the above through promoting the segmentation tasks and encapsulation of code into reuseable chunks that reduce the amount of time writing the initial code only one time, but incorporating future changes as well since it will only be necessary to change the pattern in the single function section of the code.

**Q2: Describe/define the difference between creating a function and calling/executing a function?**

> **A2:** To **create** a function you provide all the information necessary to instruct the creation instance to get ready to "do something" in a syntactically prescribed fashion.  It will sit in memory and do absoluitely nothing until it is **called**, or told to run/execute, at which point the execution context takes over and interprets the function code, assigns variable values, and run the code line by line.

**Q3: Describe/define what arguments/parameters are and how they relate to functions?**

> **A3:** A _parameter_ is a variable in a function when the function is declared (function creation context). An _argument_ is the actual value of that parameter that gets passed to the function when the function is called (function execution context).

**Q4: Describe/define mutating (dirty) vs non-mutating (pure) functions**

> **A4:  Mutating functions** alter/modify/change/**mutate** an existing object or data structure **_directly_**, i.e. it changes the original.  **Pure functions** produice a new object and data structure with those changes, i.e. the original remains unaltered/unmodified/unchanged/unmutated/**pure** and all "work" occurs on a copy

**Code Practice**
```
var shoppingCart = [20, 15];
function getTotalCost(){
	let total =  shoppingCart.reduce((total, item) => total+item);
  return total;
}
getTotalCost(shoppingCart);
```
