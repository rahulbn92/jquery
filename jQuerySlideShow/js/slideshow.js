$(document).ready(function() {
  $('#slideshow').prependTo('body');
  $('#slideshow').append('<nav id="displayCurrent"></nav>');
});

$('#slideshow li').hide();
var i=0;
slideShow();

// function for slide showing images in div.module
function slideShow() {  
  $('#slideshow li:eq(' + i + ')').fadeIn(1000).delay(2000).fadeOut(1000);
  $('#displayCurrent').html("there are total 3 images and you are watching " + $('#slideshow li:eq(' + i + ')').children("img").attr('alt') + " image");
  i++;
  if(i == 3) { 
    i = 0; 
  }
  setTimeout(slideShow,4000); 
}


 