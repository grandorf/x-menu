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
      $('.masternav__nav').addClass('animated fadeOut');
        $('.test').show();
         $('.test').addClass('animated zoomIn is-active');

           setTimeout(function(){ 
      $('.test').addClass('test-bg');
     }, 3000);
    });
}

$('#headerBurgerButton').click(function() {
  $('.xmenu').show();
  $('.xmenu__background').addClass('animated fadeIn');
  $('.header__footer').css('display', 'flex');
  $(this).hide();
  $('#headerCloseButton').show();
  //$('.header__footer-item').addClass('animated slideInUp');
});

$('#headerCloseButton').click(function() {
  //$('.xmenu').show();
  $('.xmenu__background').removeClass('fadeIn').addClass('fadeOut');
  $('.header__footer').css('display', 'flex');
  $(this).hide();
  $('#headerBurgerButton').show();
    $('.xmenu').addClass('animated fadeOut');
  $('.header__footer').removeClass('zoomIn').addClass('animated fadeOut');
});

$('#luk').click(function() {
  $('.test').removeClass('zoomIn is-active').addClass('zoomOut');
  $(paths).removeClass('is-active');
  $('.masternav__nav').removeClass('fadeOut').addClass('fadeIn');
});

$(paths).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
  paths.removeClass('slideInUp slideInDown slideInLeft slideInRight');
});