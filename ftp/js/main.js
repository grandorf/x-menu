window.$ = window.jQuery = require('jquery');

var svg = $('.xmenu__gfx');
var paths = $('.xmenu__triangle');

var i = paths.length;
while(i--) {
  paths[i].addEventListener('click', function(event) {
    paths.removeClass('is-active');
    $(this).addClass('is-active');
       // $(this).addClass('animated');
      //  $(this).addClass('slideOutRight');
      paths.not(this).remove();
      paths.not(this).insertBefore(event.target);
    });
}

$('#headerBurgerButton').click(function() {
  $('.xmenu').show();
  $('.xmenu__background').addClass('animated fadeIn');
  $('.header__footer').css('display', 'flex');
  //$('.header__footer-item').addClass('animated slideInUp');
});

$(paths).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
  paths.removeClass('animated');
});