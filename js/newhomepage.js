window.$ = window.jQuery = require('jquery');


$.fn.isOnScreen = function(){

    var win = $(window);

    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();

    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();

    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

};

$('body').scroll(function() {
   if ($('#dark').isOnScreen() == true) {
     $('.new').addClass('dark');   
   }
    else { 
     $('.new').removeClass('dark');   
   }
});

$('body').scroll(function() {
   if ($('.data').isOnScreen() == true) {
     $('.data').addClass('is-visible');   
   }
    else { 
     $('.data').removeClass('is-visible');   
   }
});

$('body').scroll(function() {
   if ($('.iphonecontent').isOnScreen() == true) {
     $('.iphonecontent').addClass('is-visible');   
   }
    else { 
     $('.iphonecontent').removeClass('is-visible');   
   }
});


$('body').scroll(function() {
   if ($('.iphoneheader').isOnScreen() == true) {
     $('.iphoneheader').addClass('is-visible');   
   }
    else { 
     $('.iphoneheader').removeClass('is-visible');   
   }
});


$('body').scroll(function() {
   if ($('.shortcuts').isOnScreen() == true) {
     $('.shortcuts').addClass('is-visible');   
   }
    else { 
     $('.shortcuts').removeClass('is-visible');   
   }
});

$('body').scroll(function() {
   if ($('.fader').isOnScreen() == true) {
     $('.fadeshit').addClass('is-visible');   
   }
    else { 
     $('.fadeshit').removeClass('is-visible');   
   }
});


$('.menu').click(function() {
  alert('Dude! This is only a prototype for the homepage effects')
});

