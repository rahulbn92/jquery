$(document).ready(function() {
  $('div.module h3').each(function(i) {
    var $newDiv = $('<div/>').insertAfter($(this));
    $(this).data('newDiv' , $newDiv);
  });
  //adding click function to h3 elements
  $('div.module h3').click(function(e) {
    e.preventDefault();
    $(this).data('newDiv').load($(this).children('a').attr('href'));
  });
});




