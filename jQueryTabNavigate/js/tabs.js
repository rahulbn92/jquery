// hiding the div.modules
$('div.module').hide();
// appending a new list before first module 
$('div.module').before('<ul id = "newUl"></ul>');
// appending h2 html at each list item
$('div.module').each(function(i) {
  $('#newUl').append('<li id = "' + (i) + '" >'+$(this).children('h2').html() + '</li>');
});
// binding click function to list item
$('#newUl li').bind('click' , function() {
  $('div.module:eq(' + $(this).attr("id") + ')').show()
    .siblings('div.module').hide();
  $(this).addClass('current')
    .siblings().removeClass('current');
});
$('div.module:eq(0)').show();