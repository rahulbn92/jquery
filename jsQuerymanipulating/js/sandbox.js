// appending five new list items in myList
for(var i = 0 ; i < 5 ; i++) {
  $('#myList').append('<li>hello world '+ i +'</li>');
}

// removing odd list from myList
$('#myList li:odd').remove();

// appending new h2 and paragraph in div.module2
$('#specials').prepend('<h2>india is my country and i love india, we should respect our country and should held self for its destruction</h2>');

// adding wednesday in selection list
$('select[name="day"]').append('<option>wednesday</option>');

// adding new div and appending a image
$('#specials').after('<div class = "module" id = "newDiv"></div>');
$('#newDiv').append('<img src = "images/bread.jpg" alt= "bread" />');
  