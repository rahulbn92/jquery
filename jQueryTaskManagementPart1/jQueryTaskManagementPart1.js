$('.employees').draggable({
  revert:true  ,
  start:function() {
    contents = $(this).text();
    contentsId = $(this).attr('id');
  }
});

$('.roleDeveloper').droppable({
  drop: function(event, ui ) {
    var text = $(this).attr('id');
    var flag = true;
    $(this).children().children().each(function() {
      if($(this).attr('id') == contentsId) {
        flag = false;
        return false;
      }
    })
    if(flag == true) {
      $(this).children('div.internalDiv').append('<div class="addEmployee" id="' + contentsId + '">' + contents + '</div>');
      $('.todosEmployee:contains('+text+')').children('div.internalDivTodos').append('<div id="' + contentsId + '"class="name">'+contents+'</div>');
      $('.todosEmployee:contains('+text+')').children('div.internalDivTodos').append('<div class="work">add todos for '+contents+' here</div>')
                                                                             .children('.work:last').append('<input type="button" class="addTodos" value= +>');
    }
  }  
});

// click function to slideup and slidedown todos
$('input[type="button"]').live('click', function() {
  $(this).parent().children('div.internalDivTodos').slideToggle(500);
});

// mouseenter function and showing cancel image
$('.addEmployee').live('mouseenter',function() {
  $(this).append('<img src="cross.jpeg"/>');
});

// mouseleave function and removing cancel image
$('.addEmployee').live('mouseleave',function() {
  $(this).children('img').remove();
});

// clicking cancel image
$('img').live('click',function() {
  var text = $(this).parent().parent().parent().attr('id');
  var currentDivID = $(this).parent().attr('id');
  if(confirm("do u want to delete the name")) {
    $(this).parent().remove();
    for(i in $('.todosEmployee:contains('+text+')').children('div.internalDivTodos').children()){
      if($('.todosEmployee:contains('+text+')').children('div.internalDivTodos').children('.name')[i].id == currentDivID){
        $($('.todosEmployee:contains('+text+')').children('div.internalDivTodos').children('.name')[i]).remove();
        $($('.todosEmployee:contains('+text+')').children('div.internalDivTodos').children('.work')[i]).remove();
      }
    }
  }
})