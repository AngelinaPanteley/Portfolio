// Can also be used with $(document).ready()
$(window).load(function() {//после того, как загрузится страница, загрузится js
  $('.flexslider').flexslider({//на какой тег вешается функция
    animation: "fade",//настройки слайдера
    controlNav: false,//нижние точки
    directionNav: false
  });
});
