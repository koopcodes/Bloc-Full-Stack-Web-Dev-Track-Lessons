<p style="font-weight: bold; text-align: center">WDT Frontend & Programming Fundamentals<br>Programming with JS<br>Checkpoint 15 - Debugging</p>

**Q1:  Open your browser. Open up the Chrome DevTools. Click on the Network tab on the DevTools. Go to your bloc dashboard page. What Request Urls are being used to get your information from the API?**

> **A1:**
> * <https://412-zqr-205.mktoresp.com/webevents/visitWebPage?_mchNc=1522188067321&_mchCn=&_mchId=412-ZQR-205&_mchTk=_mch-bloc.io-1521569097537-63975&_mchHo=www.bloc.io&_mchPo=&_mchRu=%2Fstudent_dashboard%2Fbrent-kupras&_mchPc=https%3A&_mchVr=153&_mchHa=&_mchRe=&_mchQp=>
> * https://api-iam.intercom.io/messenger/web/ping
> * https://api.segment.io/v1/p
> * https://api.segment.io/v1/t
> * https://api.segment.io/v1/i
> * https://nexus-websocket-a.intercom.io/client-test
> * https://nexus-websocket-b.intercom.io/client-test
> * https://www.bloc.io/api/v1/message_threads/unread_count
> * https://www.bloc.io/api/v1/enrollment_chains/7496/program_modules/
> * https://www.bloc.io/api/v1/users/brent-kupras/upcoming_sessions?limit=3
> * https://www.bloc.io/api/v1/student_checkpoint_submissions/revision_requested?student_id=2418035
> * https://www.bloc.io/api/v1/enrollment_chains/7496/checkpoints_remaining_in_section
~~`https://connect.facebook.net/signals/plugins/identity.js?v=2.8.12`~~
~~`https://connect.facebook.net/signals/config/1601502653449957?v=2.8.12&r=stable`~~
~~`https://connect.facebook.net/en_US/fbevents.js`~~
~~`https://bat.bing.com/bat.js`~~
~~`https://www.google-analytics.com/analytics.js`~~
~~`https://www.googleadservices.com/pagead/conversion_async.js`~~
~~`https://bam.nr-data.net/1/a93f3122a8?a=442416&v=1071.385e752~~&to=JlxYRUsJCQ5RS00SEBBXU19NOQEDR1EADgUXVxlCUQkS&rst=2790&ref=https://www.bloc.io/student_dashboard/brent-kupras&qt=3&ap=397&be=974&fe=2716&dc=1891&af=err,xhr,stn,ins&perf=%7B%22timing%22:%7B%22of%22:1522188064890,%22n%22:0,%22f%22:8,%22dn%22:10,%22dne%22:110,%22c%22:110,%22s%22:198,%22ce%22:379,%22rq%22:380,%22rp%22:875,%22rpe%22:970,%22dl%22:896,%22di%22:1890,%22ds%22:1890,%22de%22:2142,%22dc%22:2713,%22l%22:2715,%22le%22:2721%7D,%22navigation%22:%7B%7D%7D&jsonp=NREUM.setToken`~~
~~`https://widget.intercom.io/widget/ywu98agw`~~
~~`https://d2dq2ahtl5zl1z.cloudfront.net/analytics.js/v1/aoqc6vja9l/analytics.min.js`~~
~~`https://d37gvrvc0wt4s1.cloudfront.net/js/v1.1/rollbar.min.js`~~
~~`https://js-agent.newrelic.com/nr-1071.min.js`~~
~~`https://munchkin.marketo.net/153/munchkin.js`~~

**Q2: Where can I find the cookies being used on the webpage using the Chrome DevTools?**
> **A2:** Assuming DevTools is already open (ctrl + shift + I), choose the `Application` panel selector tab in betwween the `Memory` and `Security` panel selector tabs. On the left side of the Application panel is a nav menu, find the second section named `Storage` and inside find the `Cookies` expando arrow.  Press that arrow next to `Cookies` and it shows a list of Domains/URLs/sites that maintain cookies on that page, select a site and see their cookies and values stored in them

**Q3: Where can you execute JavaScript in the DevTools?**
> **A3:** You can execute JS in Chrome DevTools in two ways:
> 1. The simplest way is to just type or paste your code into the DevTools console directly at the console prompt and hit enter
> 2. While not a completely separate way to execute JS since it also uses the console, you can go to the `Sources` panel in DevTools, click on the `Snippets` tab, right-click within the Navigator, and then select New. Enter your code into the editor, save it, name it, run it. To evaluate a portion of your snippet in the Console, highlight the portion, right-click anywhere in the editor, and select Evaluate in Console, or use the keyboard shortcut Command+Shift+E (Mac) or Ctrl+Shift+E (Windows, Linux).

**Q4: How can you modify existing CSS on your webpage using the Dev Tools?**
> **A4:** Open DevTools, then right click on any part of the page you want to examine or modify. In the resulting context menu choose `Inspect` and the DevTools will immediately open to the exact element you selected/right-clicked and show the HTML in one window and all CSS being applied to the element as well.  You can edit directly and see your changes reflected real-time.  Neat!

**Q5: What happens to code you have modified through the DevTools, when you refresh the page?**
> **A5:** It goes away and the page is reloaded from the server and displayed again as the dev intended

**Q6: What are the different ways you can add breakpoints to your JavaScript for debugging?**
> **Q6:**
* Click the Sources tab.
* Open the file containing the line of code you want to break on.
* Go the line of code.
* To the left of the line of code is the line number column. Click on it. A blue icon appears on top of the line number column, that will give you a `line-of-code` breakpoint.  You can also establish `conditional breakpoints`.  There are also DOM Change, XHR, Exception, Function, and Event Listener breakpoints following the basic set up above but modify behavior of the breakpoint through the Debugger panel on the right