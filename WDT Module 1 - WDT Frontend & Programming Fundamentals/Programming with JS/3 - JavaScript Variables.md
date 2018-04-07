<p style="text-align: center;">**Programming with JS**<br>

**Checkpoint Three - JavaScript Variables**</p>

**_Questions_**
> ** Q1: What type of variable name casing do you use in JavaScript? (think of snakes or camels)**

**A1:**  We use camelCase! I really like that name for some reason.  Very descriptive

> **Q2: If you want to create a variable called `mentor` and set its value equal to the name of your mentor, how would you do that?**

**A2: ** ```var mentor = "Jacob";```

> **Q3:  How would you then log the value of `mentor` to the console?**

**A3: **  ```console.log(mentor);```

> **Q4:  Describe the difference between `let`, `var`, and `const`.**

**A4: ** `let`, `var`, and `const` are three ways to declare a variable in ECMAScript6 with `let` and `const` being new additions.

  * `var` works as it always has and can be modified 1) globally if it's outside of any functions, or 2) locally accessible only inside the function in which it was declared.

* `let`, in contrast to a variable declared with `var` that is scoped to the nearest _function block_, a variable declared with `let` is scoped to the nearest _enclosing block_ and is limited in scope to just the block, statement, or expression it which it is used (block scope), and any sub-blocks. It is not accessible even to the rest of the function in which it resides, and global variables defined with `let` will not be added as properties on the global `window` object like those defined with `var`. Used for variables that are often re-used like  `i` in flow control. Strict mode does not allow `let` variables to be re-declared in the same scope as `var` will.
*  `const` is used for variables that will not change.  Unlike `var`, `const` must have a value assignment when it is declared, and once assigned that value cannot be modified or reassigned from within the code itself while the instance is in memory.  Once initialized, the only way to change a `const` value is to shut it down, edit the code, and re-run the program. Like ` let`, a globally declared `const` will not be added as a property on the global `window` object.

**_Code Practice_**
```
const name="Koop";
var hairColor="Lt. Brown";
let homeState="California";
var phrase= "Hi, my name is " + name + ". I have " + hairColor + " hair and I live in " + homeState +".";
console.log(phrase);
```
The code above throws an error on the Bloc console related to the `name` variable cannot be declared again, but works fine in the Chrome Dev Tools consolde
