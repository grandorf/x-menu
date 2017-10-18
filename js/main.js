window.$ = window.jQuery = require('jquery');

var svg = $('.xmenu__gfx');
var paths = $('.xmenu__triangle');

var i = paths.length;
while(i--) {
  paths[i].addEventListener('click', function(event) {
    paths.removeClass('is-active');
    $(this).addClass('is-active');
    paths.not(this).remove();
    paths.not(this).insertBefore(event.target);

    $('.masternav__nav').addClass('animated fadeOut');
    $('.test').show();
    $('.test').addClass('animated zoomIn is-active');
  });
}

$('#headerBurgerButton').click(function() {
  $(this).hide();
  $('#headerCloseButton').show();

  $('.xmenu').show();
  $('.xmenu__background').addClass('animated fadeIn');

  $('.header__footer').css('display', 'flex');
  $('.header').addClass('is-active');
  

});

$('#headerCloseButton').click(function() {
  $(this).hide();
  $('#headerBurgerButton').show();

  $('.xmenu').slideUp();
  $('.header__footer').slideUp();

  $('.header').removeClass('is-active');
  $('.header__footer').removeClass('zoomIn')
});

$('#luk').click(function() {
  $('.test').removeClass('zoomIn is-active').addClass('zoomOut');
  $(paths).removeClass('is-active');
  $('.masternav__nav').removeClass('fadeOut').addClass('fadeIn');
});

$(paths).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
  paths.removeClass('slideInUp slideInDown slideInLeft slideInRight');
});