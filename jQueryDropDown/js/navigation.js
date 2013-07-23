$(document).ready(function() {
  dropDown();
});

//function for dropdown menu
function dropDown() {  
  $('#nav li').hover( function(){
    $(this).toggleClass('hover').children('ul').toggleClass('hover');
    }
  )
}
