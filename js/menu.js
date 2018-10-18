var nav = $('.navigation');
var btn = $('.btn-menubar');
var menubar = $('.menubar');

$(document).keyup(function(e) {
  if (e.keyCode === 27) {
    $('.grid')
      .toggleClass('grid-act')
  }
});
btn.on('click', function(){
  nav.toggleClass('is-act');
});