$(document).ready(function () {
  function onView(e) {
    e.preventDefault();
    const targetIdNav = $(this).data("id");
    console.log(targetIdNav);

    $(".item__child").removeClass("is_show").addClass("off");

    $(".item__child").each(function () {
      const targetIdChild = $(this).attr("id");
      console.log(targetIdChild);
      if (targetIdNav === targetIdChild) {
        $(this).addClass("is_show").removeClass("off");
        $("body").css("overflow", "hidden");
      }
      if ($(".item__child.is_show")) {
        $("list__item-child").css("transform", "translateX(0)");
      }
    });
  }

  $(".header__menu-item").hover(onView);

  // $(".header__menu-item").mouseleave(function () {
  //   $(".item__child").removeClass("is_show").addClass("off");
  //   $("body").css("overflow", "auto");
  // });
});
