var count = 0;
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
  $(this).append('<img class= "remove" src="cross.jpeg"/>');
});

// mouseleave function and removing cancel image
$('.addEmployee').live('mouseleave',function() {
  $(this).children('img').remove();
});

// clicking cancel image in role section
$('.remove').live('click',function() {
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

// function for adding todos for employees
$('.addTodos').live('click' , function() {
  $(this).parent().append('<input class="employeeWork" value="Add Todos">')
                  .append('<img class="save" src="1546229-save-button.jpg">')
                  .append('<img class="cancel" src="images (1).jpg">')
  count++;
  if(count >2) {
    $(this).parent().addClass('scrollDiv');
  }
})

// function for clicking save image
$('.save').live('click', function() {
  var input = $(this).prev().attr('value');
  $(this).prev().after('<div class="emploDiv">'+input+'</div>');
  $(this).prev().after('<img class= "edit" src = "boton-escribir-1_remix.png">');
  $(this).prev().after('<img class= "delete" src = "images.jpg">');
  $(this).prev().prev().prev().prev().remove();
  $(this).next().remove();
  $(this).remove();
})

// function for cancel adding todos
$('.cancel').live('click', function() {
  $(this).prev().remove()
  $(this).prev().remove();
  $(this).remove();
  count--;
})

// function for editing todos
$('.edit').live('click', function() {
  var savedData = $(this).prev().html();
  $(this).prev().prev().after('<input class="employeeWork" value='+savedData+'>');
  $(this).prev().after('<img class="save" src="1546229-save-button.jpg">');
  $(this).prev().after('<img class="cancel" src="images (1).jpg">');
  $(this).prev().prev().prev().remove();
  $(this).next().remove();
  $(this).remove();
})

// function for deleting todos 
$('.delete').live('click' , function() {
  count--;
  if(count<3) {
    $(this).parent().removeClass('scrollDiv');
  }
  $(this).prev().prev().remove();
  $(this).prev().remove();
  $(this).remove();
})

// function for searching name in employee section 
$('#searchButton').live('click' , function() {
  for(var i=0;i< $('.addEmployee').length;i++){
    if($('#search').attr('value') == $('.addEmployee:eq('+i+')').attr('id')) {
      $('.addEmployee:eq('+i+')').addClass('searchFound');
    } 
    else {
     $('.addEmployee:eq('+i+')').removeClass('searchFound');
    }
 }
})

// function for appending delete image after hovering over employee name in employee div
$('li.employees').live('mouseenter', function() {
  $(this).append('<img class= "deleteEmployee" src = "images.jpg">')
})

// function for removing delete image after hovering out of employee div
$('li.employees').live('mouseleave', function() {
  $(this).children('img').remove();
})

// function for deleting employee todos and role section after clicking delete image in employee section
$('.deleteEmployee').live('click' , function() {
  for(var i=0 ;i<$('.addEmployee').length ;i++) {
    if($('.addEmployee:eq('+i+')').attr('id') == $(this).parent().attr('id')) {
      $('.addEmployee:eq('+i+')').remove();
      $('.name:eq('+i+')').next().remove();
      $('.name:eq('+i+')').remove();
      i=i-1;
    }
  }
})