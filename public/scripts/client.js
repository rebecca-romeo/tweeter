/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.
const data = [
  {
    "user": {
      "name": "Test-Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Test-Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd"
    },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]


$(document).ready(function () {

  const renderTweets = function (tweets) {
    // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container

    for (tweet of tweets) {
      const $newTweet = createTweetElement(tweet);
      $('.tweets-container').prepend($newTweet);
    }

  }

  const createTweetElement = function (tweetObject) {
    const $oneTweet = $(`
      <article>
      <div class="tweets-user-container">
      <div class="tweet-user">
        <img src="${tweetObject.user.avatars}" alt="cartoon headshot user avatar">
        <h2>${tweetObject.user.name}</h2>
      </div>

      <p class="tweet-username">${tweetObject.user.handle}</p>
      </div>

      <p class="tweet-content ">
      ${tweetObject.content.text}
      </p>

      <footer>
      <p>${tweetObject.created_at}</p>

      <div>
        <i class="fa-solid fa-flag"></i>
        <i class="fa-solid fa-retweet"></i>
        <i class="fa-solid fa-heart"></i>

      </div>
      </footer>
      </article>`
    );

    return $oneTweet
  }


  renderTweets(data);
}); // END document ready