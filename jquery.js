// $(document).ready(function () {
//   $("#dess").mouseover(function () {
//     $(".show").show();
//     $("#des").hide();
//   });
//   $("#dess").mouseout(function () {
//     $(".show").hide();
//     $("#des").show();
//   });
// });

// $(document).ready(function () {
//   $("#devv").mouseover(function () {
//     $(".show").show();
//     $("#dev").hide();
//   });
//   $("#devv").mouseout(function () {
//     $(".show").hide();
//     $("#dev").show();
//   });
// });

// $(document).ready(function () {
//   $("#prodd").mouseover(function () {
//     $(".show").show();
//     $("#prod").hide();
//   });
//   $("#prodd").mouseout(function () {
//     $(".show").hide();
//     $("prod").show();
//   });
// });

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
