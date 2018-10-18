var containerWidth = $(window).width();
var columnGutter = 20;
var columnCount = 4;
var columnGutterWidth = columnGutter * (columnCount + 1)
var columnWidth = containerWidth - columnGutterWidth;
var column = columnWidth / columnCount;
var gridColumn = ((column + columnGutter) / containerWidth) * 100;
$(window).resize(function() {
  location.reload();
  $('.container').addClass('grid-act');
});
$(document).keyup(function(e){
  if(e.keyCode === 27){
    $('.container').removeClass('grid-act').css('background', 'transparent');
  }
});

if ($('.container').hasClass('grid-act')) {
  $('.container').css('background', 'repeating-linear-gradient(90deg, transparent, transparent 20px, hsla(0,70%,50%,.5) 20px, hsla(0,70%,50%,.5)' + gridColumn + '%' + '),' + ' ' + 'repeating-linear-gradient(180deg, hsla(210,70%,50%,.5), hsla(210,70%,50%,.5) 1px, transparent 1px, transparent 16px)');
}
