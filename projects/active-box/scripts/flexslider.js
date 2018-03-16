// Can also be used with $(document).ready()
$(window).load(function() {
  $('.js-flexslider-1').flexslider({
    animation: "slide",
    controlNav: "thumbnails"
  });

  $('.js-flexslider-2').flexslider({
    animation: "slide",
    directionNav: false
  });
});