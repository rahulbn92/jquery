// code for showing div having class= module
$('div.moule')
alert("no of divs having class 'module' are " + $(this).length);

// code for showing text of tr having index odd
$('tr:odd').each(function() {
alert( "text of <tr> having index odd  "  + $(this).html());
})

// code for showing no of images having attribute alt
var imageAttributeAlt = $('img[alt]');
alert(" no of images having attribute alt are " + imageAttributeAlt.length);

// no of hidden elements
var hiddenElements = $(':hidden');
alert("no of hidden elements are " + hiddenElements.length);

// label for search input
var labelSearch = $('label[for="q"]');
alert("text in the search label is  " + labelSearch.html());

// showing list item3 in 3 ways
alert("showing list item 3 in 3 ways")
alert("using direct id  " +$('#myList li:nth-child(3)').html());
alert("using child property  " +$('#myList li:eq(2)').html());
alert("using id for a list  " +$('#myList').children('#myListItem').html())
alert("best way is through direct id because in other cases it is traversing through program for more time than through direct id");