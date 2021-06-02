$(document).ready(function () {
  // $("h1").click(function () {
  //   alert("This is a heading.");
  // });

  // $("p").click(function () {
  //   alert("This is a paragraph.");
  // });

  // $("img").click(function () {
  //   alert("This is an image.");
  // });
  $(".clickable").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });
});

  $(".box1").click(function() {
    $(".box1").slideDown();
  })