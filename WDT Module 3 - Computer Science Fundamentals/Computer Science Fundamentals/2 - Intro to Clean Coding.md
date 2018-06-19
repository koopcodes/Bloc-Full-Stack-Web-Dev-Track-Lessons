<p style="text-align: center; font-weight:bold">WDT Module 3 - Computer Science Fundamentals<br>Computer Science Fundamentals<br>Checkpoint 2 - Intro to Clean Coding</p>

**Exercises**
Please submit your answers to the following questions in a file called `intro_to_clean_coding_answers.txt`.

1. In your own words, explain what clean code is and why it is important.
2. Read [this article](https://www.edn.com/design/automotive/4423428/Toyota-s-killer-firmware--Bad-design-and-its-consequences) about Toyota and their use of bad code. Although you may not yet understand all of the topics discussed, think about another commonly used object that relies on computers and explain what would happen if the code was not created to an acceptable standard.
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
**Programming Questions**
You may do the following problems in any language of your choice. Use the clean code principles taught in this section while writing the code.

6. **Square** Given an array of integers, find out whether the sum of the integers is a perfect square. If it is a perfect square, return the square root, otherwise return the sum.

```javascript
Example:
[10,1,4,6,1,1,2] returns 5 because the square root of 25 is 5.
[1,1] returns 2 because 2 is not a perfect square.
The square root of 2 is approximately 1.414213562373095.
```
7. **Duplicate** Given an array of integers, find out whether the array contains any duplicate elements. The function should return true if any value appears at least twice in the array, and false if every element is distinct.
```javascript
Example:
[10,1,4,6,1,1,2] returns true because 1 occurs three times.
[1,10,5,7,3,8,2] returns false because 2 is not a perfect square.
```

Extra Credit
8. **Anagram** An anagram is a word, phrase, or name formed by rearranging the letters of another word. For example, spar can be formed from rasp. Given two strings, stringOne and stringTwo, determine if stringOne is an anagram of stringTwo. Assume that the strings contain only lowercase letters and do not worry about case-sensitivity. Hint: Your first task will be to convert the strings to arrays.

**Response**
My strengths include 1) good problems solving, i.e., being able to break complex problems into smaller, more easily solved bits, and 2) Desire/Enthusiasm: After coding everyday for 4 months I am still not tired of it, can't get enough, even when I am taking a break I am reading articles or watching videos about JavaScript and CSS because I find CSS pretty challenging (things constantly not working the way I thought they would!). Lastly, besides my affinity for the industry/community I just love learning new things so I think makes me a good fit for the developer role because if you aren't learning new stuff and going forward you are really go backwards, the industry never stands still

My main weakness at this point I guess boils down to lack of exerience/practice, but I have a real hard time sitting down and coding something out from scratch without refering to various resources to get the syntax right.  I know what I want to do, like the other day I knew I wanted to use `.reduce` on an array to total it's elements, but I had to look up how to use it properly on MDN. I am constantly having to do that, not just with JS but HTML and CSS as well. Again, I figure I will need to refer to sources less and less as I gain experience but I thought I would be further along in that process by now with as much as I have been coding. Then again I feel like I have been drinking from a firehose at times because there is just so much material so maybe I am absorbing things at my usal rate but there is so much to absorb it just seems like I haven't absorbed that much?  There are **SO MANY** CSS attributes and properties!  So many HTML Elements!  So many JS methods! But I will keep at it, really nothing I'd rather be doing
