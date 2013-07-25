$(document).ready(function(){
  loadJSON();
});

function loadJSON () {
  var $newDiv = $('<div></div>').insertAfter($('#specials form'));
  $('select[name="day"]').data('newDiv' ,$newDiv);
  var jsonObject 
  $.ajax({ url:"specials.json" , success:function(data) {
    jsonObject = data;
  }});
  $('select[name="day"]').change(function(){
    var selectedDay = $('select[name="day"] option:selected').val();
    var selectedKey =jsonObject[selectedDay];
    $(this).data('newDiv').css('color',  selectedKey.color);
    $(this).data('newDiv').html(selectedKey.title + "<p>" + selectedKey.text + "</p>");
    $(this).data('newDiv').append("<p><img src='images/special.jpg ' /></p>");
  });
  $('.buttons').remove();
}
