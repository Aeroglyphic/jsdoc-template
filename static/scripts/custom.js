(function($){

  //on-off switch
  $(function() {
    $(".onoffswitch-label").click(function() {
      $('body').toggleClass('dark');
    });
  });

  // Bootstrap Scrollspy
  // var $scrollSpy = $(this).scrollspy({ target: '#scrollingNav', offset: 18 });
  // $('[data-spy="scroll"]').each(function () {
  //     $scrollSpy('refresh');
  // });


})(jQuery)
