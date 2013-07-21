$(document).ready(function(){
  addNewDiv();
});

// function for adding new divs
function addNewDiv() {
  var count = 1;
  $('#addDiv').click(function() {
    $('#outerDiv').prepend("<div id=div"+count+">DIV" + count + "</div>");
    $('#outerDiv').children('#div'+count+'').addClass('newDiv');
    count++;
  });
  $('#outerDiv').delegate('div' , 'click' , function() {
    $(this).toggleClass('highlight');
    if($(this).is(':first-child')) {
      $(this).remove();
      count--;
    }
  });
}