<p style="text-align: center">**WDT Frontend & Programming Fundamentals**<br>
**Programming with JS**<br>
**Checkpoint Six - Loops**</p>
> **Q1:  What are the three things you need to provide for a loop? I.e. for(a; b; c;), what are a, b, and c?**

**A1:** "for a loop", or for a `for` loop? A `for` loop requires: <br>
a. initialization - set initial value of control variable<br>
b. condition - iterates if it evaluates as true<br>
c. final-expression - runs at the end of the iteration, usually an increment or decrement of the control variable

For example: <br>
for(initialization ; condition ; final-expression )<br>
`for(var i=0; i<10; i++)`

> **Q2: Describe infinite loops and how to avoid them.**

**A2: ** An infinite loop occurs when the condition _always_ evaluates as `true` so it never stops iterating:<br>
`for(var i = 0; i < 10; i--)  //i will _always_be less than 10`<br>
The `for` loop above will never stop iterating

Avoiding them depends on watching your condition statement carefully and making sure it works in conjunction with your final-expression statement so that the condition will eventually evaluate as `false` and the loop will cease to interate

**Code Practice**
```

var shoppingCart = [
	{
		id: 0,
		name: "Mens Shirt",
		price: 20,
		size: "Large"
	},
	{
		id: 1,
		name: "kids shirt",
		price: 15,
		size: "small"
	}
];
for (let i = 0; i < 2; i++) {
	console.log(shoppingCart[i].name);
}

```
