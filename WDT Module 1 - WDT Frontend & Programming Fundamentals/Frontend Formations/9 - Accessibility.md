**_Questions_**
> Why is accessibility so important?

A: So ALL Users, regardless of ability or disability, will be able to access my site and the information it contains and have as good a User Experience as possible.  Also it will help SEO efforts as well as make it easier for various forms of screen readers

> What are some forms of accessibility as it relates to web development?

A: Forms of Accessibility
  * Visual - when designing content consider people with blindness, poor vision, color blindness, and don't forget photo epileptic seizures caused by visual strobe or flashing effects!
  * Motor - make my site accessible and EASILY NAVIGABLE to those with lost or impaired hand control.  I HATE nested drop downs!!!!!!
  * Auditory - Not everyone can hear. Don't autoplay audio or video!
  * Cognitive - Things like ADD, Dyslexia, and Autism or even just having a concussion will make a difference in how people want or need to access our information.  Things needs to be very clearly associated and presented

> In your own words, what does semantic mean?

A: In my own words?  Hmmm....Semantic would relate to the **_meaning_** of words or combinations of words in a language

> What is semantic HTML?

A: Semantic HTML goes beyond just presentation or the look of page content, and tries to indicate and reinforce the **_meaning_** of the the information in a web page or app through the use of elements more descriptive that just `<div>` or `<span>`

> What are some common accessibility issues your end users might have? a. What are some steps you would take to make their experience on your site better?

A: Sort of ironic since we are talking accessibility and the first item in my markdown table below says use high contrast BG and Text, but I **cannot** seem to get the table to display as normal text color, nor can I get the cell borders to appear. Let me know if you have problems reading it and I will submit it again and try to not be so cute with the markdown

| Issue             | Improvement                   |
|:----------------- |:----------------------------- |
| Visual Impairment | Use High Contrast BG and Text |
|                   | Use Semantic HTML             |
|                   | Use Alt Text                  |
|
|
|
| Hearing Impairment | Text Transcripts of Spoken Audio |
|                    | Text Tracks / Captioning of Video |
|
|
|
| Motor Impairment | Make controls keyboard accessible |
|                  | Don't nest drop down menus |
|
|
|
| Cognitive Impairment | Make pages consistent |
|                      | Pages not too long or dense |
|                      | Use plain language |
|                      | Key content is highlighted |

> What do we use the `<label>` tag for?

A: A `<label>` for a form control helps everyone better understand its purpose and clearly associate the form field with its associated desired input

```
<!DOCTYPE html> <!--Added DOCTYPE so browser will know what type of coument this is -->
<html>
  <head>
    <meta charset="utf-8">
    <title>Cats are the best!</title>
  </head>
  <body>
        <aside>Sidebar will go here</aside>
        <main>
          <h2>My awesome site</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <p>
            Check out this cat:
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/4d/Cat_November_2010-1a.jpg" alt="Pretty Kitty"></p>
            <p></p>
            <p></p>
            <p></p>
          <h1>Isn't it a great cat?!?</h1>
  </body>
</html>
```