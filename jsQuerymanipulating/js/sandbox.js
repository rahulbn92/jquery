for(var i=0; i<5;i++) {
  
$('#myList').append('<li>hello world '+i+'</li>');
}

$('#myList li:odd').remove();

$('#specials').prepend('<h2>india is my country and i love india, we should respect our country and should held self for its destruction</h2>');
$('select[name="day"]').append('<option>wednesday</option>');

$('#specials').after('<div class="module" id="newDiv"></div>');
$('#newDiv').append('<img src="images/bread.jpg" alt="bread" />');
  