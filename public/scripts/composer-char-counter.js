$(document).ready(function() {
  $('#tweet-text').on('input', function() {
    const input = $('#tweet-text');
    const characters = input.val().length;
    const charactersLeft = 140 - characters;
    const counter =  $('.counter');

    counter.html(charactersLeft);

    if (charactersLeft < 0) {
      counter.addClass('invalid');
    } else {
      counter.removeClass('invalid');
    }

  });
});