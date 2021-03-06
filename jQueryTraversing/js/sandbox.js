// logs each image's alt attribute
console.log("alt atrributes of images are ");
$('img').each(function() {
  console.log($(this).attr('alt'));
});

// adds a class searchclass to parent of input with name ="q"
$('input[name="q"]').parent().addClass('searchClass')
console.log("class added to form with search input box is  " +$('#search').attr('class'))

// adds current class to sixth li and removes from the fifth li
$('li.current').next().addClass('current')
               .prev().removeClass('current');
console.log("after adding and removing class from li , the main list looks like  "  +$('#myList').html());

// traversing to go button from select with name ="day"
console.log("traversing from select to input button ");
console.log("input button value is " +$('#specials select').parents('#specials').find('input[type="submit"]').val());

// adding class = current to first child  and class="disabled" to remaining children of ul with id= "myList" 
$('#slideshow li:first-child').addClass('current')
$('#slideshow li:first-child').nextAll().addClass('disabled')
console.log("after adding classes to li with parent id = myList , list looks like  " +$('#slideshow').html());