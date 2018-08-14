#### WDT Module 4 Server-side JS with Node.js
### Section 1 - Server-side JS with Node.js
## Checkpoint 9 - Debugging Node

# Exercises
## Questions

1. How do you access the DevTools for Node in Chrome?
> Open Chrome, and in the URL search bar enter: chrome://inspect. On the page that loads, click: Open dedicated DevTools for Node

2. What are the main differences between the regular Chrome DevTools and the DevTools for Node? Biggest difference is that Chrome DevTools runs in the browser and DevTools for Node runs from a command line. Chrome DevTools also has a console for running code.

3. Using the built-in Node debug tool, what command do you use to continue the execution of your code?
`cont`, or `c`, will each continue execution

4. Which statement do you put in your code to set a breakpoint?
`debugger`

## Code Challenge

There is no code challenge for this checkpoint, but you are encouraged to go to exercises in previous checkpoints in order to try using the Chrome DevTools for Node and the built-in Node debugging. These tools will come in particularly handy in the remaining 3 sections of Node. Tell us what you learned from using these handy debug tools, and discuss further use cases with your mentor in your next session.
> Using each for just a little bit it seems to me the Chrome DevTools is much easier to use with the built in console, easier to set breakpoints, easier to see what's going on. I will definitely be using the Chrome tools when I have the chance over the built in debug CLI

REVISION REQUESTED
Hey Koop,

I'd like for you to clarify your answer for #2. It sounds like your description of DevTools for Node is actually the node command line debugging tools. The DevTools for Node is the chrome window that you interact with, but that is different from the normal chrome devtools. Can you elaborate on that difference. Keep up the good work!

John Fecko

Team Grader

Hi, John.  Thanks for the feedback.  I misread the question to start, and then as you noted I conflated the the built-in command line Node degugger with the name DevTools for Node on top of that. Thanks again, and I'll watch the Git assignment merges as well.

Revision 1
**2. What are the main differences between the regular Chrome DevTools and the DevTools for Node?**
> To debug in node devtools versus regular devtools you use --inspect or --inspect-brk flags when calling your js file under node to make node to listen via WebSockets for diagnostic commands.  Then add `debugger` statements where you want breakpoints. There are also some differences in the interface and tool set owing to the different enviroments they are designed to debug. There is no Elements tab in node devtools like there is in the regular Chrome DevTools. Also no Audits, Security, Application, Performance, or Network tabs in the node devtools. Node devtools has Connection and Profiler tabs the regular devtools does not.
