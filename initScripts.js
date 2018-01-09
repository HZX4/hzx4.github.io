$(function(){
  $("#greeter-image").height($("#greeter-image").parent().height());
  $("#splash").height($(window).height()-100);

  //unslider scripts
  $('.my-slider').unslider({infinite:true});
  $(".unslider-arrow").each(function(){
    $(this).css("top", ($(this).parent().height()-$(this).height())/2);
  })

  //centering scripts
  $(".centermeV").each(function(){
    $(this).css("marginTop", ($(this).parent().height()-$(this).height())/2);
  });
  $(".centermeH").each(function(){
    $(this).css("marginTop", ($(this).parent().width()-$(this).width())/2);
  });
});
