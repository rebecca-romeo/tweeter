/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function () {

  // Handler and submit event for when the user submits the new tweet form (clicking on the tweet button submits the form)
  const handler = function (event) {
    event.preventDefault();

    // Get tweet content from form input
    const tweetContent = $('#tweet-text').val();

    // Check if tweet content is too long
    if(tweetContent.length > 140) {
      return $('.new-tweet-error-message').text("Your tweet is too long! In order to make a post, please stay within 140 characters.").show();
    }

    // Check if tweet content is empty
    if (!tweetContent.trim()) {
      return $('.new-tweet-error-message').text("No tweet content to post! Please type a message first.").show();
    }


    console.log("check")

    const formData = $(this).serialize();

    $.ajax({
      url: '/tweets',
      method: 'POST',
      data: formData
    })
      .then(function (data) {
        $('.tweets-container').prepend(createTweetElement(data));
      })

    location.reload(true);

  }

  // event listener for submit event on the form
  $('#tweet-form').on('submit', handler);

      // Send request to the /tweets server to fetch all the tweets that are stored, then render them to the page
      const loadTweets = function() {
        $.ajax('/tweets', { method: 'GET' })
          .then(function(moreTweets) {
            renderTweets(moreTweets);
          });
      };
      loadTweets();



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

      <p class="tweet-content">
      ${tweetObject.content.text}
      </p>

      <footer>
      <p>${timeago.format(tweetObject.created_at)}</p>

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