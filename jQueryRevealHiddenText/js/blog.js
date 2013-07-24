// binding the click function to slideup and slidedown
$('#blog li h3').bind('click' , function(e) {
  e.preventDefault();
  $(this).siblings('p').slideDown(1000);
  $(this).parent().siblings().children('p').slideUp(1000);
});
