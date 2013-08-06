$(document).ready(function(){
  var jsonObject = [];
  var filterParameter = ['brand', 'color', 'sold_out'];
  $.ajax({
    url: "jQueryProductGrid.json",
    dataType: 'json',
    success: function(data){
      jsonObject = data;
      displayBlocks(jsonObject);
      for(var i = 0 ; i < filterParameter.length ; i++) {
        $('.' +filterParameter[i]).bind('click', function(){
          var images = $('#mainBox img');
          images.hide();
          for (var key in filterParameter){
            images = filterImages(images, filterParameter[key]);
          }
          images.show();
        })
      }
    },
    error: function() {
      console.log("failed to load content data from json file");
    }
  })
})

// function for displaying data on load
function displayBlocks(jsonObject){
  for(var i = 0; i < jsonObject.length; i++){
    $('#mainBox').append('<img id ="img_' + i + '"  src="images/' + jsonObject[i].url + '" />');
    $('#img_' + i + '').attr( 'color' , jsonObject[i].color)
                       .attr( 'brand',  jsonObject[i].brand)
                       .attr( 'sold_out',  jsonObject[i].sold_out);
  }
}

// function to filter images by particular parameter
var filterImages = function(images, filterParameter){
  var filterArray = new Array();
  filterArray = [];
  if($('.' + filterParameter + ':checked').length != 0) {    
    $('.' + filterParameter + ':checked').each(function(){
      var selectedFilter = $(this).prop('value');
      filterArray.push('img[' + filterParameter + '="' + selectedFilter + '"]');
    })
    var filterArray = filterArray.join(',');
    images = images.filter(filterArray);
  }
  return images;
}
    

