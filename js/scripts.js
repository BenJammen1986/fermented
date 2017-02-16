$(function() {
  $("#userInput").on('change', function(){
  var selection = ($("#items").val());
  console.log(selection);

    if (selection === "Beer") {
      $(".Beer").show();
      $(".Kombucha,.Borscht,.Kim-chi,.Kefir").hide();
    }
    if (selection === "Borscht") {
      $(".Borscht").show();
    $(".Kombucha,.Kefir,.Kim-chi,.Beer").hide();
    }
    if (selection === "Kombucha") {
      $(".Kombucha").show();
    $(".Kefir,.Borscht,.Kim-chi,.Beer").hide();
    }
    if (selection === "Kim-chi") {
      $(".Kim-chi").show();
    $(".Kombucha,.Borscht,.Kefir,.Beer").hide();

    }
    if (selection === "Kefir") {
      $(".Kefir").show();
      $(".Kombucha,.Borscht,.Kim-chi,.Beer").hide();

    }
  });
});
