// variable for storing text of label
var labelText = $('label[for="q"]').text();
$('#q').val( labelText);
// adding hint class to input text
$('#q').addClass('hint');
// removing label 
$('label[for="q"]').remove();
// adding focus and blur events to input text
$('#q').bind('focus blur ' , function(e) {
  $(this).toggleClass('hint');
  if(e.type == 'blur') {
  	if($(this).val() == '') {
      $(this).val(labelText);
    }  
  }
  else {
  	if($(this).val() == labelText) {
	    $(this).val('');
    }
  }
});