$(document).ready(function () {
  $(".design").mouseover(function () {
    $(this).children(".show").show();
  });
  $(".design").mouseout(function () {
    $(this).children(".show").hide();
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
