(function($){

  //Dark theme
  $(function() {

    var darkTheme = false;

    $(".onoffswitch-label").click(function() {

      darkTheme = !darkTheme;

      if(darkTheme) {
        $('body').toggleClass('dark');
        localStorage.setItem('theme', 'dark');
       } else {
        $('body').toggleClass('dark');
        localStorage.removeItem('theme');
       }
     });

    if (localStorage['theme'] == "dark") {
      $('.onoffswitch-label')[0].click();
      $('body').addClass('dark');
    }

  });


  // Bootstrap Scrollspy
  // var $scrollSpy = $(this).scrollspy({ target: '#scrollingNav', offset: 18 });
  // $('[data-spy="scroll"]').each(function () {
  //     $scrollSpy('refresh');
  // });


})(jQuery)
