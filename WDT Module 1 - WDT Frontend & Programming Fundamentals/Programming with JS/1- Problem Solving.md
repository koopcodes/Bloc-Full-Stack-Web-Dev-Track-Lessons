<p style="text-align: center;">**Programming with JS**<br>

**Checkpoint One - Problem Solving**</p>

**_Questions_**
> **Q1: What are the steps involved in making a peanut butter and jelly sandwich?**

**A1: Making a PB&J Sandwich**

1. Are you hungry?
  * If yes then proceed, else stop
2. Are you hungry for a PB&J?
  * If yes then proceed, else stop
3. Do you have what you need to make a PB&J?
  * 2 pieces of bread?
  * Enough Peanutbutter?
  * Enough Jelly?
  * Clean butter knife?
  * Cold milk
  * Clean glass
  * If yes to all then proceed
4. Unscrew the lid to the Peanutbutter
5. Unscrew the lid to the Jelly
6. Open the bag of bread
7. Place one piece of bread on the palm of your off hand
8. Pick up a butter knife with your dominant hand
9. Place the knife into the jar of peanutbutter as far as you can with out getting peanutbutter on your hand
10. Twist knife hand clockwise, using knife blade to scoop out Peanutbutter
11. Move the knife, with peanutbutter on top and blade underneath, over to the bread in your palm
12. Once over the bread turn the knife over so the peanutbutter is down on the bottom and the knife blade is on top
13. Place the knife, peanutbutter-side down, on the edge of the bread furthest away from you
14. Slowly draw the knife towards you, gently smearing the peanutbutter evenly over the surface of the bread until it is evely distributed and of the desired thinkness
15. Put down piece of bread with the peanutbutter
16. Repeat Steps 7 through 15 but replace every instance of the word peanutbutter with the word Jelly
17. Pick up both pieces of bread and carefully place them together, peanutbutter side of the one touching the jelly side of the other.
18. _Gently_ squeeze to make sure the sammich will stick together and to squeeze out any excess or loose jelly that might otherwise fall onto your shirt or floor
19. Move hands containing sandwich towards your sandwich hole
20. Open sandwich hole, put sandwich in your sandwich hole, and bite down
21. Chew
22. Savor it's PB&J goodness
23. When it is sufficently masticated, swallow
24. Repeat steps 19 - 23 until sandwich is goodness
25. Pour your self a nice cold glass of milk to wash it down
26. Wash it down!
27. Wait 15 minutes
28. Start again at step 1, repeat process if/as needed

> **Q2: In our “Say Hi” example, if the Say Hi part of the program never runs, how would you narrow down the problem?**

**A2:** We know that getting the "Say Hi" function to output "Say Hi" depends on 3 things happening in this order:
  1. The successful completion of User Name Input function
  2. The Successful completion of User Button Click function
  3. The Say Hi function is accepting the appropriate input from and set to give the desired output if 1 & 2 above complete in order

If the we are not getting the expected result, in this case the Say Hi function is not being run at all, we should begin troubleshooting in the reverse order of the dependancies listed above:

1. If the Say Hi function is not being run at all we must ensure it is written to get the appropriate input from User Click Button function. We should also ensure it is set to return the appropriate output once the necessary input is recieved. If everything checks out then the Say Hi function's failure to run must be the result of a lack of input from the User Button Click function so we climb the ladder of dependancies and ensure the User Button Click Function is working properly
2. Is the User Button Click function being run? If it is not being run, is it set up to recieve the appropriate input from the User Name Input function? If it is being called, why is it not sending the appropriate output to the Say Hi function? If the latter, fix it to send the right output to trigger Say Hi.  If the former, continue to climb the ladder and examine User Name input
3. Is the User Name Input function being run? If it is not being run, is it recieving the appropriate input from the user? If not, why not? If it is being run why is it not sending the appropriate output to the User Button Click function? Fix to send appropriate output to User Button Click

_To borrow the conveyor belt analogy from the other example in this lesson, unless you have some other indication of what the specific cause of malfunction may be to narrow things down, start troubleshooting by following the conveyor belt back from the point of failure towards the beginning of the road map and test each step in turn_

> **Q3: What would the roadmap for narrowing down the Say Hi problem look like?**

**A3:**
![My Road Map and Troubleshooting Order](http://kupras.net/img/CheckPoint%201%20Roadmap%20and%20Troubleshooting.jpeg)
For more comments on the troubleshooting process see my cvomments above

> **Q4: Create a problem-solving example using a roadmap and the process of elimination for narrowing down issues of your own. You already use this skill daily. Break down and explain a problem you solve in your everyday life.**

**A4:** What do to about not having "enough" money?
![My money roadmap and process failure troubleshooting](http://kupras.net/img/CheckPoint%201%20Roadmap%20and%20Troubleshooting2.jpg)
I gp to work, I make money, I put it in the bank, and I spend it as I live my life.  Whay happens when I don't have enough money to do, eat, and live as I would like? I started out this exercise as a half-serious example because I couldn't think of anything better, but it turned out to be very worthwhile for the standpoint of making me feel empowered and optimistic because it shows my how many options I have in dealing with my "process failure" lol. In the short term obviously the solution is to realign where I go, what I do, what I eat, and how I live with the output of the Spend Money module. The Spend Money module is actually functioning as intended for the most part, but we need to add some parameters in the there that account for the level of $$$ in the Put Money in the Bank module before we make the decision to spend it. In addition to adjusting Spend Money, and even though the Make Money module is working as intended perhaps there are enhancements we can make to it to increase it's output ($$$) into the Put Money in Bank module.  Part time job?  Sell assets? But the best long term solution is perhaps to be found again in another module that is "working as intended" but could be improved (Get new job that pays more $$$) and ameliorate the downstream effects of Insufficient Funds
