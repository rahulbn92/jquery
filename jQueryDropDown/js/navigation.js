$(document).ready(function() {
  dropDown();
});

//function for dropdown menu
function dropDown() {  
  $('#nav li').hover( function(){
    $(this).addClass('hover').children('ul').css('display','block');
  },function() {
      $(this).removeClass('hover').children('ul').css('display','none');
    }
  );
}
