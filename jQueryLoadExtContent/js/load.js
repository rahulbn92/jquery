$(document).ready(function() {
  $('div.module h3').each(function(i) {
  $(this).children('a').attr('href','javascript:void(0)');
  // making new divs and adding classes to them
  var $newDiv = $('<div class="' + (i + 1) + '"></div>').insertAfter($(this));
  $(this).data('newDiv' , $newDiv);
  });
  //adding click function to h3 elements
  $('div.module h3').click(function() {
    $(this).data('newDiv').load('blog.html #post' + $(this).data('newDiv').attr('class'));
  });
});




