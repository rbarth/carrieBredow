$(document).ready(function(){


$(function() {


    function abso() {

      $('#hopeImage').css({
          width: $(window).width(),
          height: $(window).height() - $('nav').height() - $('header').height()
        });
    }

    $(window).resize(function() {
      abso();
    });

    abso();
  });

$(function() {
  var sticky = $('nav').offset().top;

  $(window).scroll(function() {
      if ($(window).scrollTop() > sticky) {
        $("nav").css({
           "position": "fixed", "top": "0px", "left": "0px"
         });
      }
      else {
        $("nav").css({
           "position": "relative"
         });
      }
  });

});

$(function() {

  $(window).scroll(function() {
    // alert($(window).scrollTop());
    // alert($('#rowContainer').offset().top);
      if ($(window).scrollTop() + $('nav').height() > $('#rowContainer').offset().top) {
        $("nav").css({
           "background": "rgba(6, 33, 68, 0.8)"
         });
      }
      else {
        $("nav").css({
          "background": "rgba(6, 33, 68, 0.6)"
         });
      }
  });

});



  $(function() {

    var mainH = $('main').height();
    var windowH = $(window).height();

      if (mainH < windowH)
      {
        function abso() {

          $('main').css({
              height: $(window).height()
            });
        }

        $(window).resize(function() {
            abso();
          });

        abso();
      }
    });



});
