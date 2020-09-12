$("#input-text").keyup(function () {
  let value = $("#input-text").val();
  $(".counter").html(value.length);
});
