$(document).ready(function() {
  showProducts();
})

function showProducts() {
  $('input[type="radio"]').prop('disabled', true);
  // function for choosing item
  $('body').delegate('.items', 'click' , function() {
    $item = $(this);
    $('.items').removeClass('highlight');
    $item.addClass('highlight');
    $('.ratings').removeClass('highlight');
  });

  // function for choosing specific rating type
  $('body').delegate('.ratings' , 'click' , function() { 
    var $rating = $(this);
    $('.ratings').removeClass('highlight');
    $rating.addClass('highlight');
    $('input[type="radio"][name="' + $item.attr('id') + '"]').prop('disabled', true);
    $('input[type="radio"][name="' + $item.attr('id') + '"][value ="' + $rating.attr('id') + '"]').prop('checked', true);
    $('input[type="radio"]:checked').prop('disabled', false);
  });
}

