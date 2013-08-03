$(document).ready(function() {
  showProducts();
})

function showProducts() {
  $('input[type="radio"]').prop('disabled', true);
  // function for choosing item
  $('body').delegate('.items', 'click' , function() {
    $item = $(this);
    $clickedItem = $item.html();
    $('.items').removeClass('highlight');
    $item.addClass('highlight');
    $('.ratings').removeClass('highlight');
  });

  // function for choosing specific rating type
  $('body').delegate('.ratings' , 'click' , function() { 
    $rating = $(this);
    $ratingValue = $rating.html();
    $('.ratings').removeClass('highlight');
    $rating.addClass('highlight');
    $('input[type="radio"][name="' + $clickedItem + '"]').each(function() {
      $(this).prop('checked', false);
      $(this).prop('disabled', true);
    }) 
    $('input[type="radio"][name="' + $clickedItem + '"][value ="' + $ratingValue + '"]').prop('checked', true);
    $('input[type="radio"]:checked').prop('disabled', false);
  });
}

