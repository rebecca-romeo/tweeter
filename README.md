# Tweeter Project

Tweeter, a front-end focused application that also utilizes express, allows users to write a messages under 140 characters and post it to the page.

## Users:
- Can create new tweets and post them to the page
- Users must stay within 140 characters. A tweet that is too long will show a red character count, and display an error message if they try to post it
- Users can backspace letters at any time, and watch the character count change to reflect the currrent number of characters
- Users must write a message in order to post. Empty tweets will display an error message if they try to post it

## Create a new Tweet
Write a new tweet. Watch the character count decrease as you type so that you know to stay within the limit of 140 characters. Post your new tweet and see it dynamically add to the page.
!["screenshot of creating new tweet"](https://github.com/rebecca-romeo/tweeter/blob/master/public/images/new_tweet.gif)

## Error: tweet is too long!
When you write a tweet that is too long, the character count turns red to let you know you've passed the character limit. If you try to post a tweet that's too long, you'll get an error message.
!["screenshot of a long tweet"](https://github.com/rebecca-romeo/tweeter/blob/master/public/images/long_tweet.gif)

## Error: you didn't write a message!
If you try to post a tweet without writing anything, you will get an error message letting you know that each tweet needs some content in order to be posted.
!["screenshot of an empty tweet"](https://github.com/rebecca-romeo/tweeter/blob/master/public/images/empty_tweet.gif)

## Responsive design - desktop, tablet, mobile
Responsive design allows you to seemlessly switch between screen sizes and view on different devices
!["screenshot of an empty tweet"](https://github.com/rebecca-romeo/tweeter/blob/master/public/images/responsive_design.gif)

## Dependencies

- body-parser
- chance
- express
- md5

## Getting Started

- Install all dependencies (using the `npm install` command).
- Start the project (using the `npm start` command).
- Go to http://localhost:8080 to view the app
