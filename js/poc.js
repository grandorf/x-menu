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

$(window).scroll(function() {
   if ($('#pocImage').isOnScreen() == true) {
     $('.main').addClass('is-visible');   
   }
    else { 
     $('.main').removeClass('is-visible');   
   }
});

$(window).scroll(function() {
   if ($('#pocImage2').isOnScreen() == true) {
     $('.main').addClass('is-visible2');   
   }
    else { 
     $('.main').removeClass('is-visible2');   
   }
});