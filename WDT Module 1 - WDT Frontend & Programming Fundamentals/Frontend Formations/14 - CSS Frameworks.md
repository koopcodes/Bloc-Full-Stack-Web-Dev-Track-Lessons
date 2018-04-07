**Questions**

**Q1:** List at least three sites you frequent that use each CSS framework: Bootstrap, Foundation, and Material Design.
> **A1:**
Bootstrap
https://www.indeed.com/
https://www.georgetown.edu/
http://pixelmatters.com/
Foundation
https://www.vans.com/
https://www.amazon.com/
http://www.adobe.com/
Material Design
http://www.sydneyairport.com.au/
http://www.tuffshed.com/
http://www.activision.com/

**Q2:** Read the official documentation and analyze the three leading CSS frameworks in this checkpoint. Why are some used in specific projects over others? What are the deciding factors? Is it aesthetics, development team, or a particular feature such as built-in animation or an advanced grid system?

> **A2:** A lot of factors go into choosing which framework to use and when:
De gustibus non est disputandum. I may think MDL is sterile, but customer/stakeholder loves it. Guess which gets used?
It is a common opinion that the prevalence of Bootstrap has “made all website look the same” and often meant derogatorily in terms of visual aesthetics, but positively in terms of user experience because users become accustomed to how things work and respond on a bootstrapped site and so have a better experience which may be more important than being visually distinctive depending on the purpose of the site *In addition to Visual aesthetics consider Programming aesthetics as well since some coders will inevitably prefer one framework over another just as a matter of taste
>
>The development team’s overall environment plays a huge role as well. *Team leaders have their own aesthetics as above when they have choices to make, as well as considering the experience level and expertise of the team in using the various frameworks.
>
> Some teams may have invested large amounts of time creating a range of planned and ad-hoc customizations in their use of a framework so they don’t have to start from scratch each time, and losing those tools while trying to learn a new system may not be practical from a business bottom-line perspective
>
> Depending on customer/stakeholder requirements and preferences it may be necessary to use one framework over another to make use of a specified typography or desired animation style. To do what a customer wants a grid may not work at all, and may require a box or flexbox model depending on purpose and desired functionality *Integration with other technologies. “We need to use JS framework ABC, and CSS framework XYZ has sweet integration suite to help us”

**Q3:** Why would you use a CSS framework?

> **A3:**
> * They can help you get your feet wet and learn CSS, and they come with documentation
> * They provide code that you just don't need to write from scratch every time, like resets
> * They relieve cross-browser concerns
> * It helps you build good habits like including a print stylesheet
> * I purposefully left out saving time. From what I have read it may save time AFTER I have used it a bunch and am comfortable with it, and even then that may be true only in the initial stages of a project but that time savings may get cancelled out by technical debt incurred as the project goes on and on maybe for years: unsemantic html, over-specific CSS selectors, rules you don’t need/bloat/size, etc.

Casey Bennington
 REVISION REQUESTED
Mar 16, 2018 @ 2:03am
Nice work so far Brent!

For question 2, you began to go a bit in specifics about Bootstrap, but that was about it. This question is looking for you to specifically compare and contrast the 3 frameworks, why would a company use or not use one versus another?

Casey

Grading Team Member

Brent Kupras
 UPDATED SUBMISSION
Mar 20, 2018 @ 12:15pm
Revison to Question 2

**Read the official documentation and analyze the three leading CSS frameworks in this checkpoint. Why are some used in specific projects over others? What are the deciding factors? Is it aesthetics, development team, or a particular feature such as built-in animation or an advanced grid system?**

> A: I'm not sure how much detail to go into here, for example Bootstrap measures in Pixels and Foundation uses Rems and that may make a difference for someone who has a strong poreference for working in one than there other. But IN GENERAL:

> Bootstrap is used when speed and ease of setup is key concern over customization. It isn’t quite as feature-full and the default look of Bootstrap components seems more suited to quickly building a one-off website and adding a theme. There tons of free plugins and themes from a huge community that will minimize setup time, but it will take a lot of work to customize things enough tyhat it won't be recognizable as a Bootstrap website. It can use Less or Sass and esily fixes CSS browser compatibility issues, though it does have a complex style that is not very semantic
Foundation has a tiny bit more features and widgets like bulit-in form validation, and more grid system capabilities like collapse and Column Center. But whereas Bootstrap tries to give you everything you need to get a site up and running quickly Foundation tends to provide a better environment for customization. Foundation’s default look feels closer to browser defaults which makes it slightly easier to mold into a unique aesthetic. You don't have to add non-semantic classes to be responsive or achieve certain styles, though it does work only with Sass/Scss so Less fans may choose differently. While the Foundation community is only about 1/10th the size of the Bootstrap it does have additional support options and training available through Zurb
Material Deign is not, in and of itself, a CSS Framework. Rather it is a set of design and function guidlines to be followed when designing sites or creating a framework. Material Design Lite is a CSS Framework that is best suited for implementing a site design that adheres to Material Design's precepts and controling UX design elements and their visual interactions. MDL is well documented and responize, but a few older browsers are not supported
30,000 Foot View / TL;DR/ Nutshell Summary

> * Bootstrap for ease and speed in implementing a consistent, familar, and appealing UI.
> * Foundation for it's customization potential
> * Material Design Lite to get the Material Design look and feel

Casey Bennington
 CHECKPOINT APPROVED
Mar 20, 2018 @ 10:36pm
Great adjustment Brent!

Casey

Grading Team Member