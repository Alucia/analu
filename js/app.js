$(document).scroll(function () {
    var scroll = $(this).scrollTop();
    if (scroll >= 500) {
    	$("header nav").css("background-color", "#4D4D4D");/*#FF7D5D*/
      } else {
       $("header nav").css("background-color", "transparent");
    }
});

$('.counter').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },
  {

    duration: 8000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });  
});


