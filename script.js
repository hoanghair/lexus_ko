$(document).ready(function() {
  $(".list__menu-item").hover(
    function() {
      $(".list__menu-item").not(this).css("opacity", "0.4");
    },
    function() {
      $(".list__menu-item").css("opacity", "1");
    }
  );
});