$(document).ready(function(){
  $('a.down').click(function(){
    var n=parseInt($(this).attr('id'));
    $(".parallax").animate({ scrollTop: window.pageYOffset + n*$(window).height()}, 500);
    return false;
  });

  $('a.top').click(function(){
    var n=parseInt($(this).attr('id'));
    $(".parallax").animate({ scrollTop: window.pageYOffset + n*$(window).height()}, 500);
    return false;
  });
});