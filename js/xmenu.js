window.$ = window.jQuery = require('jquery');

$.fn.extend({
  animateCss: function (animationName) {
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    this.addClass('animated ' + animationName).one(animationEnd, function() {
      $(this).removeClass('animated ' + animationName);
    });
    return this;
  }
});


var svg = $('.xmenu__gfx');
var paths = $('.xmenu__triangle');
var scrollFix = $('html, body').scrollTop();

var i = paths.length;
while(i--) {
  paths[i].addEventListener('click', function(event) {
    paths.removeClass('is-active');
    $(this).addClass('is-active');
    paths.not(this).remove();
    paths.not(this).insertBefore(event.target);

    $('.masternav__nav').removeClass('add-delay').addClass('animated zoomOut');
    $('.test').show().addClass('is-active').animateCss('zoomIn');
  });
}


$(".xmenu").on("click", ".xmenu__triangle--top", function() {
  $('.test__menu').hide();
  $('#navTop').show();
});

$(".xmenu").on("click", ".xmenu__triangle--right", function() {
    $('.test__menu').hide();
  $('#navRight').show();
});

$(".xmenu").on("click", ".xmenu__triangle--bottom", function() {
    $('.test__menu').hide();
  $('#navBottom').show();
});

$(".xmenu").on("click", ".xmenu__triangle--left", function() {
    $('.test__menu').hide();
  $('#navLeft').show();
});


$('#headerBurgerButton').click(function() {
  $(this).hide();
  $('#headerCloseButton').show();

  $('.xmenu').show();
  //$('.xmenu__background').addClass('animated fadeIn');

  $('.header__footer').css('display', 'flex');
  $('.header').addClass('is-active');
  $('html').addClass('header-is-active');
  $('.main').css('top', scrollFix + 'px');
});

$('#headerCloseButton').click(function() {
  $(this).hide();
  $('#headerBurgerButton').show();

  $('.xmenu').slideUp();
  $('.header__footer').hide();

  $('.header').removeClass('is-active');
  $('html').removeClass('header-is-active');
});

$('#luk').click(function() {
  //$('.test').removeClass('zoomIn is-active').addClass('zoomOut');
  $(paths).removeClass('is-active').addClass('add-delay');

  $('.masternav__nav').removeClass('zoomOut').addClass('zoomIn add-delay');
  $('.masternav__nav').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
   $(this).css('display', 'flex');
 });

  $('.test').animateCss('zoomOut');
  $('.test').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
    $(this).hide();
    //$('.test__menu').hide();
  });
});

$(paths).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
  paths.removeClass('slideInUp slideInDown slideInLeft slideInRight');
});
