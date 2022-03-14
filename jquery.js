$(document).ready(function () {
  $("#dess").mouseover(function () {
    $(".show").show();
    $("#des").hide();
  });
  $("#dess").mouseout(function () {
    $(".show").hide();
    $("#des").show();
  });
});

$(document).ready(function () {
  $("#devv").mouseover(function () {
    $(".show").show();
    $("#dev").hide();
  });
  $("#devv").mouseout(function () {
    $(".show").hide();
    $("#dev").show();
  });
});

$(document).ready(function () {
  $("#prodd").mouseover(function () {
    $(".show").show();
    $("#prod").hide();
  });
  $("#prodd").mouseout(function () {
    $(".show").hide();
    $("prod").show();
  });
});

$(document).ready(function () {
  $(".images").mouseover(function () {
    $(this).children(".overlay").show();
  });
  $(".images").mouseout(function () {
    $(this).children(".overlay").hide();
  });
});
