$(document).ready(function(){
  var totalImages = $('#slideshow').children("li").length;
  var i = 0;
  $('body').prepend("<div id='slideshowDiv' style='width:900px; height:390px'></div>")
  $('#slideshowDiv').prepend($('#slideshow'));
  $('#slideshow').children('li').hide()
                           .parent().after("<div id='navigationDiv' class='current'></div>");
  slideshow(totalImages, i);
})
//function to slideshow images
function slideshow(length, i){
  var image = $('#slideshow li:eq('+ (i++) +')');
  $('#navigationDiv').html("(there are total '" + length + "' images: )" + "\n" + " And current image is '" + image.children("h2").text());
  image.fadeIn(1000).delay(1000).fadeOut(1000);
  if(i == length){
    i = 0;
  }
  setTimeout(function(){slideshow(length,i)},3000);
}


 