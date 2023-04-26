$(document).ready(function() {
  $('#tweet-text').on('input', function() {
    let input = $('#tweet-text');
    let characters = input.val().length;
    let charactersLeft = 140 - characters;
    let counter =  $('.counter');

    counter.html(charactersLeft);

    if (charactersLeft < 0) {
      counter.addClass('invalid');
    } else {
      counter.removeClass('invalid');
    }

  });
});