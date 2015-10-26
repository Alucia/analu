$(function(){ 
  
// Scroll to anchor
// Source: http://css-tricks.com/snippets/jquery/smooth-scrolling
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {                
        $('html,body')
        // added the stop() function to prevent animations from queueing up 
        .stop().animate({
          scrollTop: target.offset().top
        }, 1000).find("h2 > a")
        
        // added a top padding to make the title visible on my fixed top nav menu
        .css("padding-top","50px");
        return false;       
      }
    }
  });
  