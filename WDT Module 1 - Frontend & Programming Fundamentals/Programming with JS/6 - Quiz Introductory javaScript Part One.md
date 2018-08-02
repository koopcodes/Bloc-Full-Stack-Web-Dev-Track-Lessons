QUIZ SUBMISSION
Mar 22, 2018 @ 6:05pm
QUIZ SCORE: 7/8
What would you use to find out how many characters are in the string 'Favorite Movie'?
'Favorite Movie'.size()
String('Favorite Movie').length
> 'Favorite Movie'.length

count('Favorite Movie')
Covered in: Arrays

Which one of the following expressions will evaluate to true?
'Great Wall of China' = 'Great Wall of China'
'Great Wall of China' == 'great wall of china'
>'Great Wall of China' != 'great wall of china'

'Great Wall of China' !!= 'great wall of china'
Covered in: Arrays

What would the following code output?
`console.log('There will be ' + (42/7) + ' more weeks of winter.');`
'There will be (42/7) more weeks of winter.'
> 'There will be 6 more weeks of winter.'

'There will be (6) more weeks of winter.'
It would throw an Uncaught SyntaxError.
Covered in: Arrays

Which of these is not a valid variable name in JavaScript?
favoriteFood
favorite_food
$favoriteFood
> favorite-food

Covered in: JavaScript Variables

Which of these correctly creates a new variable and assigns it a value of 'Monday'?
`var('today', 'Monday');`
> `var today = 'Monday';`

`variable today = 'Monday';`
`today = 'Monday';`

Covered in: Arrays

Given the string 'Hello there!', what is the index of the letter t?
1
> 6

7
undefined
Covered in: Arrays

What method would you use to get a specific character of a string based on its position?
index()
> charAt()

character()
length()
Covered in: Arrays

Which of these is an example of correctly including a JavaScript file in your HTML?
> `<script src="app.js"></script>`

`<javascript src="app.js"></javascript>`
`<link rel="script" href="app.js">`
`<include src="app.js"></include>`
Covered in: Arrays
``

Brent Kupras to Jacob Martens
Mar 22, 2018 @ 6:11pm
Edit
I call foul on Question One. Running String('Favorite Movie').length absolutely returns the correct value as does 'Favorite Movie'.lengthbut I could only chose one answer and the one I chose it saying it is incorrect?


Brent Kupras
Mar 22, 2018 @ 6:15pm
Edit
Now I am confused because String('Favorite Movie').length; gives me a correct answer in the Chrome Dev Tools console but not in the Bloc code window.....I still say using the String() function is a correct answer and I should get credit


Jacob Martens
Mar 22, 2018 @ 6:42pm
Hi Brent. The reason this isn’t the case is because String(“my string”) creates an object representation of a string while just calling “my string” creates a string literal. In order to find the length of a string, there would be no need to turn it into an object first, as it would be rather inefficient.


Brent Kupras
Mar 22, 2018 @ 7:23pm
Edit
That makes perfect sense, Jacob. So in essence by using String() I did not determine the length of the original string but rather the length of the object I created that had the same length as the original string


``
Brent Kupras
 UPDATED QUIZ SUBMISSION
Mar 23, 2018 @ 8:53am
QUIZ SCORE: 8/8

Valorie Dodge
 QUIZ APPROVED
Mar 23, 2018 @ 10:00am
Great score! Great job correcting the question you got wrong!

Valorie Dodge Grading Team Member