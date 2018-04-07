<p style="text-align:center; font-weight: bold">WDT - FrontEnd Fundamentals & Programming<br> Module 1 - Becoming a Developer<br>Checkpoint 4 - A Practical Look at Problem Solving</p>

# Questions
**Q1: Help! Customers are not getting their products from the following assembly line. Based on this output, how would you figure out what the problem is? Identify the line(s) that are broken.**
>**A1:** Based on the outout it does not look like the loadOnTruck method is being called at all.  Examining the code it looks like we are missing some brackets:
``` product.loadOnTruck(); ``` **NOT** ``` product.loadOnTruck;  ```

**Q2: Another assembly line is broken! Narrow it down! What line(s) are broken? Submit the answer**
>**A2:** Looking at the console outout something is going wrong in the packaging station.  Looking at the code there we are not passing the `shippingType` parameter to product.package:
```product.package(shippingType); ``` **NOT** ``` product.package(); ```