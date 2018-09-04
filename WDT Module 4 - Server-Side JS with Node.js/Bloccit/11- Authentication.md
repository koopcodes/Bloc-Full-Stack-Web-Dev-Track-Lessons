### Module 4 Server Side js
### Section 3 Bloccit
### Checkpoint 11 - Authentication

## For this assignment, read more about the different strategies available for authenticating with Passport. Pick a strategy to study and write a high-level explanation of how it works. This explanation does not need to be technical. ##

> Of the 5 listed on the Passport website passport-facebook, passport-http-bearer, passport-google-oauth, passport-twitter, passport-auth0, I decided to look at [passport-http-bearer](https://github.com/jaredhanson/passport-http-bearer) because I could guess something about how the others worked by their names but I didn't understand http-bearer so this is what I learned:

passport-http-bearer authenticates HTTP requests using bearer tokens in Node applications and is typically used to protect API endpoints. The bearer tokens are often issued using [OAuth 2.0 OAuth2orize](https://github.com/jaredhanson/oauth2orize) and then integrated into any application or framework that supports [Connect](http://www.senchalabs.org/connect/)-style middleware, including [Express](http://expressjs.com/).

Requests containing bearer tokens do not require session support. Using OAuth2orize will issue a token that once installed can be checked through code without user intervention. Part of the trick is to get the bearer token to the user securely, and even though URI parameters are encrypted over HTTPS it is better to send the token as a header (for the same reasons it's better to keep session ID in a cookie rather than in a URI) instead of as a parameter in the redirect.
