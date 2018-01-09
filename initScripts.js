$(function(){
  var topm = (100-$("#name").height())/2;
  $("#name").css("marginTop",topm);
  var topu= (100-$("#nav-contain ul").height())/2;
  $("#nav-contain ul").css("marginTop",topu);
  var h = $(".sblock").first().width();
  $(".sblock").height(h);
  $(".lblock").height(h*2);
  sw = $(".sqpr").width();
  $(".sqpr").height(sw);
  $(".sqpr img").width(sw).height(sw);
  $("#greeter-image").height($("#greeter-image").parent().height());
  gi = ($("#greeter-image").height()-$("#greeter-image img").height())/2;
  $("#greeter-image img").css("marginTop", gi);
  $("#splash").height($(window).height()-100);
  var y = ($("#splash-text").parent().height()-$("#splash-text").height())/2;
  console.log(y);
  $("#splash-text").css("margin-top", y);
});
