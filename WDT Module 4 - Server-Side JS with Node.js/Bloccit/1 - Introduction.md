#### WDT Module 4 Server-side JS with Node.js
### Section 3 - Bloccit
## Checkpoint 1 - Introduction

# Exercises

1. For each question below, answer which part of MCV should be responsible for it:
- A method that pulls the last 10 topics
> Model - the data structures needed to store information and the methods used to interface with that data
- A representation of the upvotes on a post
> View - Controls what the user sees, renders dynamic content like the vote count
- Logic that parses params coming from the client.
> Controller - handles incoming requests from the client, move data in and out of the database and the view

2. Write a user story with acceptance criteria for a feature that involves moderating content on Bloccit
>User Story: As an admin user, I want to be able to moderate posts for inappropriate language and images
>
>Acceptance Criteria:
>- Use a Natural Language Processing (NLP) tool to review posts and where high confidence exists allow content to be automatically approved and published
> - The NLP tool will pass low confidence posts are passed on to human moderators for approval, rejection, or review
> - Users will recieve an alert if they enter profanity in a submission form
> - Users can report a post and request human moderation
> - If posts are removed the contributor will get an email explanation
> - If reviews are rejected the reporting user will get an email explanation
> - Keep a record of who reports, who is reported, when and how often
