<p style="text-align: center; font-weight:bold">WDT Module 3 - Computer Science Fundamentals<br>Computer Science Fundamentals<br>Checkpoint 3 - Introduction to Pseudocode</p>

[Answers also here](https://gist.github.com/koopdev/8d94bd2ea0bfd0378e31a1e70085748b)

**Short Answer**
**Q1:** Why do programmers use pseudocode?
> Pseudocode is a way to develop algorithms and express what code should do without using a particular language syntax but rather a format meant for humans to read rather than machines.  For "brainstorming before you begin to code your program."

**Q2:** If you run pseudocode on your computer what would happen?
> Uncaught SyntaxError: Unexpected identifier
Psuedocode is not meant to be executed, it won't compile, transpile, or any other kind of pile. It's meant to be read by humans ands maybe really reeally smart dogs ;)

**Programming Assignment**
Write the following algorithms in pseudocode:

1. Create a function that takes two numbers and prints out the greater number.
```
INPUT number1 AND number2
FUNCTION compare(number1, number2)
	IF number1 OR number2 are null
        BREAK
		IF number1 > number2
			PRINT number1
		ELSE IF number2 > number1
			PRINT number2
		ELSE
			PRINT number1 + ' is equal to ' + number2
		END IF
	ELSE CONTINUE
	END IF
END FUNCTION
```

2. Create a function that prints out the numbers from 1 to 100.
```
FUNCTION printNumbers
	SET number = 1
	WHILE number < 101
		PRINT number THEN
		SET number = number + 1
	END WHILE
END FUNCTION
```



3. Create a function that searches for a specific entry in a phonebook.
```
FUNCTION returnPhoneNumber
	LOAD OBJECT phoneBook
	PROMPT for name
	RETURN phoneBook by name
END FUNCTION
```

4. Using the pseudocode you wrote for the previous question, implement it in any computer language of your choice.
```javascript
function returnPhoneNumber () {
	var phoneBook = {
		'Alex':'(520) 379-2658',
		'Bob':'(568) 458-7412',
		'Carl':'(100) 562-1237',
		'Dave':'(888) 777-6666',
		'Earl':'(301) 111-2222',
		'Frank':'(555) 999-1111',
		'George':'(455) 745-2587'
	};
	var name = [prompt('Enter First Name', 'First Name Only')];
	var phoneNumber = phoneBook[name];
	return phoneNumber;
}
```
Revised Psuedocode:
```
INPUT number1 AND number2
FUNCTION compare(number1, number2)
	IF number1 > number2
		PRINT number1
	ELSE
		PRINT number2
	END IF
END FUNCTION
```
Thanks for the feedback, John. Yes, my `IF number1 > number2` was supposed to be nested inside of `IF number1 OR number2 are null` with my intent being to screen out any null arguments before trying to compare them. I see now it say quite clearly I have two numbers but I guess I never want to take that for granted in the real world. The 'ELSE CONTINUE' I didn't feel good about either but I wanted to include the ELSE so it was clear I did not forget it even though I had nothing for it to do. In a way trying to make myself clear actually obfuscated my intent and resulted in less readable code, a value perspective to have and something for me to watch in the future. Without having to worry about that, as well as your point taken on evaluating for equivalency, makes the code a lot simpler and easier to read.
