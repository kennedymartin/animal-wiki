$(document).ready(function() {
  $(".btn").submit(function(event) {
   var animal = $("#animal").val();
  if (animal === turtle) {
    $('#turtle').show();
  // } else if (animal === snake) {
    // $('#snake').show();
  // } else (animal === insects) {
    // $('insects').show();
  }
  // event.preventDefault();
  });
});
