// variable for storing text of label
var labelText = $('label[for="q"]').text();
$('#q').val( labelText);
// adding hint class to input text
$('#q').addClass('hint');
// removing label 
$('label[for="q"]').remove();
// adding blur events to input text
$('#q').live(' blur ' , function(e) {
  $(this).addClass('hint');
  if($(this).val() == '') {
    $(this).val(labelText);
  }
});
// adding focus event to input text
$('#q').live(' focus ' , function(e) {
 $(this).removeClass('hint');
  if($(this).val() == labelText) {
    $(this).val('');
  }
});