// appending five new list items in myList
for(var i = 0 ; i < 5 ; i++) {
  $('#myList').append('<li>hello world '+ i +'</li>');
}

// removing odd list from myList
$('#myList li:odd').remove();

// appending new h2 and paragraph in div.module2
$('div.module:last').append('<h2>Another Paragraph</h2><p>india is my country and i love india, we should respect our country and should held self for its destruction</p>');

// adding wednesday in selection list
$('select[name="day"]').append('<option value="wednesday">Wednesday</option>');

// adding new div and appending a image
$('<div class = "module" id = "newDiv"></div>').insertAfter('div.module:last');
 $('img:first').clone().appendTo('div.module:last');

