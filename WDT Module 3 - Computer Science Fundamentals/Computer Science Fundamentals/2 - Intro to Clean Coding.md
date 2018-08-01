<p style="text-align: center; font-weight:bold">WDT Module 3 - Computer Science Fundamentals<br>Computer Science Fundamentals<br>Checkpoint 2 - Intro to Clean Coding</p>

**Exercises**
Please submit your answers to the following questions in a file called `intro_to_clean_coding_answers.txt`.

1. In your own words, explain what clean code is and why it is important.
> Clean code is Reader-Focused Development that aims to write code that not just solves the problem but strives to be as readabile and understandable, as simple and efficient, and as easy to maintain as possible while still solving the problem. This is important not just for coders you work with and those that come after you, but you yourself as well because you are likely to forget what you were thinking when you wrote it soon after you move on. Clean code will make it easier to find and fix bugs as well as add/modify features.
“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.” – Martin Fowler.

2. Read [this article](https://www.edn.com/design/automotive/4423428/Toyota-s-killer-firmware--Bad-design-and-its-consequences) about Toyota and their use of bad code. Although you may not yet understand all of the topics discussed, think about another commonly used object that relies on computers and explain what would happen if the code was not created to an acceptable standard.
> While not as life-or-death a situation as the Toyota ECM firmware issue in the linked article the thing that comes to my mind is the ubiquitous Point-of-Sale (POS) systems billions of people use everyday.  From the barcode scanning, the itemized display and total, along with the whole electronic payment system at the end.  Again not as critical in terms of saftey but what if we couldn't trust the bar code scanners to read the items correctly, or the backend to bring up the right, or the payment to go through for the correct amount to the correct account? It was not that long ago that people did live without all those things so again, not as critical as proper throttle function in a car, but it was also someone's soul-crushing job to put little price stickers on EVERYTHING in the store and if we wanted to buy anything at the store we had to go to the bank first (if it was open), stand in line, guess how much cash we needed, not lose it on the way to the store, then watch that the cashier manually rings up everything at the correct price.  Not life-threating but it certainly would reshape how people live their lives and take a huge chunk out of the global economy as the velocity of money slowed. There are still bugs and imperfections in our POS systems and they sometimes go unnoticed because no one dies, and frankly they work well enough most of the time that most people don't even pay attention anymore.  But if you are one of the ones that do you will notice that not EVERYTHING rings up the way it is supposed to, but I must say the payment system works pretty damn flawlessly as far as me not being charged for someone else's purchases or the amounts debited match my purchase.

3. Would you consider the following to be clean code? Explain why or why not. If not, refactor the code.

```
FUNCTION do(x, y)               // Creating a new function
 IF y = "F" THEN               // Check if y is equal "F"
 SET z to (x−32) * (5/9)       // Formula to convert degrees fahrenheit to celsius
 PRINT z                       // Print result
 ELSE IF y = "C" THEN          // If y not equal to "F", check if equal to "C"
 SET z to x * 1.8000 + 32.00   // Formula to convert degrees celsius to fahrenheit
 PRINT z                       // Print result
 END IF
END FUNCTION
```
> No, not clean code.  Too many comments, non-descriptive function and variable names, and it does more than one thing in a single function.  Change the function and variable names like so, and the comments become unnecessary:
```
FUNCTION convertTemperature(degrees, units)
	IF units = 'F' THEN
	CALL convertFahrenheit with (degrees)
	ELSE IF units = 'C' THEN
	CALL convertCelsius with (degrees)
	ELSE PRINT 'Choose F for Fahrenheit or C for Celsius'
	END IF
END FUNCTION

FUNCTION convertFahrenheit (degrees)
	SET temperatureCelsius to (degrees - 32) * (5/9)
	PRINT temperatureCelsius + '°C'
END FUNCTION

FUNCTION convertCelsius (degrees)
	SET temperatureFahrenheit to degrees * 1.8 + 32
	PRINT temperatureFahrenheit + '°F'
END FUNCTION
```
4. Would you consider the following to be clean code? Explain why or why not. If not, refactor the code.
```
FUNCTION calcPercent(sum, total)
 IF NOT(total = 0) THEN
     SET percentage to sum / total * 100
 ELSE
   PRINT "Sorry, cannot divide by 0"
 END IF
 PRINT percentage
END FUNCTION
```
> This is a trick question I'm sure, but I'm going to say this IS clean code. The function and variable names are descriptive.  I can tell what the function is for and how it is doing it easily. Even has an edge case handler with helpful message explaining the problem

5. Using pseudocode, refactor the code for the following examples using the principles you have learned in this checkpoint.

	a. The following function prints the subtotal of a customer's transaction and receives payment accordingly.

```
FUNCTION checkOutCustomer(subTotal, discountRate, paymentType)
   PRINT "Your total due is: " + subTotal * discountRate + (subTotal * tax)
   IF paymentType = 'CASH' THEN
       CALL getPayment RETURNING amount
       PRINT "Change due: " + amount - subTotal * discountRate + (subTotal * tax)
   ELSE IF paymentType = 'CREDIT CARD' THEN
       CALL getPayment RETURNING amount
       PRINT "Your credit card has been charged: " + subTotal * discountRate + (subTotal * tax)
   END IF
END FUNCTION
```
> My Answer: DRY the total
```
FUNCTION calculateTotal
	SET total to subTotal * discountRate + (subTotal * tax)
	RETURN total
END FUNCTION

FUNCTION processPayment
	PRINT 'Your total due is:' = total
	IF paymentType = 'CASH' THEN
       		CALL getPayment RETURNING amount
       		PRINT "Change due: " + amount - total
   	ELSE IF paymentType = 'CREDIT CARD' THEN
       		CALL getPayment RETURNING amount
       		PRINT "Your credit card has been charged: " + total
   	END IF
END FUNCTION
```

b. The following function checks out a book if there are no issues with the guest's account.

```
FUNCTION checkoutBook(book, guest)
 IF guest.accountActive THEN
     IF NOT(guest.hasOverdueBooks) THEN
         IF guest.outstandingFees = 0 THEN
           APPEND book to guest.books
           SET book.status to "Checked Out"
           PRINT "Your books have been issued."
         END IF
     END IF
 ELSE
     PRINT "Unable to check out book."
 END IF
END FUNCTION
```
> My Answer: Remove excessive nesting
```
FUNCTION checkoutBook(book, guest)
 IF guest.accountActive AND NOT(guest.hasOverdueBooks) AND guest.outstandingFees = 0 THEN
           APPEND book to guest.books
           SET book.status to "Checked Out"
           PRINT "Your books have been issued."
 ELSE
     PRINT "Unable to check out book."
 END IF
END FUNCTION
```

c. The following class is a code snippet that should support the transactions a customer can perform at an ATM.

```
CLASS BankAccount

 FUNCTION displayBalance
    PRINT balance
 END FUNCTION

 FUNCTION deposit(amount)
    SET balance to balance + amount
 END FUNCTION

 FUNCTION withdraw(amount)
     IF balance > amount THEN
       SET balance to balance - amount
     END
 END FUNCTION

 FUNCTION creditCardOffer
     IF NOT(customer.hasCreditCard) THEN
         CALL offerCreditCard
     END
 END FUNCTION

 FUNCTION checkStatus
     IF NOT(customer.hasCheckingAccount) THEN
         CALL offerCheckingAccount
     END
 END FUNCTION

 ....
 ....
 ....

END
```
> My Answer: Split Class in to 2 different areas of concern
```
CLASS Money

 FUNCTION displayBalance
    PRINT balance
 END FUNCTION

 FUNCTION deposit(amount)
    SET balance to balance + amount
 END FUNCTION

 FUNCTION withdraw(amount)
     IF balance > amount THEN
       SET balance to balance - amount
     END
 END FUNCTION
 ....
 ....
 ....
END

CLASS Marketing
 FUNCTION creditCardOffer
     IF NOT(customer.hasCreditCard) THEN
         CALL offerCreditCard
     END
 END FUNCTION

 FUNCTION checkStatus
     IF NOT(customer.hasCheckingAccount) THEN
         CALL offerCheckingAccount
     END
 END FUNCTION
 ....
 ....
 ....
END
```

**Programming Questions**
You may do the following problems in any language of your choice. Use the clean code principles taught in this section while writing the code.

6. **Square** Given an array of integers, find out whether the sum of the integers is a perfect square. If it is a perfect square, return the square root, otherwise return the sum.

```javascript
//Sqaure in javaScript
function perfectSquare (integerArray) {
      var arraySum = integerArray.reduce((total, amount) => total + amount);
  		var sumSquareRoot = Math.sqrt(arraySum);
	return (sumSquareRoot % 1 === 0 ? sumSquareRoot : arraySum);
}
```
7. **Duplicate** Given an array of integers, find out whether the array contains any duplicate elements. The function should return true if any value appears at least twice in the array, and false if every element is distinct.

```javascript
//Duplicates in javaScript
function isDuplicates (initialArray) {
    var counts = [];
    for(var i = 0; i <= initialArray.length; i++) {
        if(counts[initialArray[i]] === undefined) {
            counts[initialArray[i]] = 1;
        } else {
            return true;
        }
    }
    return false;
}
```

Extra Credit
8. **Anagram** An anagram is a word, phrase, or name formed by rearranging the letters of another word. For example, spar can be formed from rasp. Given two strings, stringOne and stringTwo, determine if stringOne is an anagram of stringTwo. Assume that the strings contain only lowercase letters and do not worry about case-sensitivity. Hint: Your first task will be to convert the strings to arrays.

```javascript
function isAnagram(string1, string2) {
	function alphabetize(string) {
		return string.split('').sort().join('');
	}
	return (alphabetize(string1) === alphabetize(string2));
}
```
