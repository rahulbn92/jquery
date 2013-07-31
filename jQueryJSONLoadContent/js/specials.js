$(document).ready(function(){
  loadJSON();
});

function loadJSON () {
  var $newDiv = $('<div/>').insertAfter($('#specials form'));
  $('select[name="day"]').data('newDiv', $newDiv);
  var jsonObject 
  $.ajax({ url:"specials.json" , success:function(data) {
    jsonObject = data;
  }});
  $('select[name="day"]').change(function() {
    var selectedDay = $('select[name="day"] option:selected').val();
    var selectedKey = jsonObject[selectedDay];
    if(selectedDay == 'Select') {
      $(this).data('newDiv').html(" ");
    }
    else {
      $(this).data('newDiv').css('color',  selectedKey.color)
                            .html(selectedKey.title + "<p>" + selectedKey.text + "</p>")
                            .append("<p><img src='images/special.jpg ' /></p>");
    }
  });
  $('.buttons').remove();
}
