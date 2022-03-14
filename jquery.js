$(document).ready(function () {
  $("#des").click(function () {
    $("#des").hide();
    $(".show").show();
  });
  $(".show").click(function () {
    $("#des").show();
    $(".show").hide();
  });
});

$(document).ready(function () {
  $("#dev").click(function () {
    $("#dev").hide();
    $(".development").show();
  });
  $(".development").click(function () {
    $("#dev").show();
    $(".development").hide();
  });
});

$(document).ready(function () {
  $("#prod").click(function () {
    $("#prod").hide();
    $(".product").show();
  });
  $(".product").click(function () {
    $("#prod").show();
    $(".product").hide();
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
