// setting the  href attribute to void(0)
$('#blog a').attr('href','javascipt:void(0)');
// binding the click function to slideup and slidedown
$('#blog li h3').bind('click' , function() {
  $(this).siblings('p').slideDown(1000);
  $(this).parent().siblings().children('p').slideUp(1000);
});
