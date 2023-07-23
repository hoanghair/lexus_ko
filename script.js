$(document).ready(function () {
  const menuItems = $(".header__menu-item");
  const itemChildList = $(".item__child-list li");
  const itemChildLvtwo = $(".child__lvtwo-item ul li");

  menuItems.hover(function () {
    menuItems.removeClass("on blur");
    $(this).addClass("on");
    menuItems.not(this).addClass("blur");
    $(".overlay").css("display", "block");
  });

  function onView(e) {
    e.preventDefault();
    const targetIdNav = $(this).data("id");
    const itemChild = $(".item__child");
    const listItemChild = $(".header__menu-child");

    $(itemChild).removeClass("is_show").addClass("off");

    $(itemChild).each(function () {
      const targetIdChild = $(this).attr("id");
      if (targetIdNav === targetIdChild) {
        $(this).addClass("is_show").removeClass("off");
        $("body").css("overflow", "hidden");
      }
      if ($(itemChild).hasClass("is_show")) {
        $(listItemChild).css("transform", "translateX(0)");
      }
    });
  }

  function onViewLvTwo(e) {
    e.preventDefault();
    const targetIdNavLv2 = $(this).data("id");
    const childsLv2 = $(".child__lvtwo");
    const itemChildLv2 = $(".child__lvtwo-item");

    // $(itemChildList).removeClass("on").addClass("off");
    $(itemChildList).removeClass("is-on");
    $(this).addClass("is-on");
    // $(itemChildList).not(this).addClass("blur");

    $(childsLv2).removeClass("is_show").addClass("off");
    $(itemChildLv2).removeClass("is_show").addClass("off");

    $(itemChildLv2).each(function () {
      const targetIdChild2 = $(this).attr("id");
      if (targetIdNavLv2 === targetIdChild2) {
        $(childsLv2).addClass("is_show").removeClass("off");
        $(this).addClass("is_show").removeClass("off");
        $("body").css("overflow", "hidden");
      }
    });
  }

  function onViewLvThree(e) {
    e.preventDefault();

    $(itemChildLvtwo).removeClass("is-on3");
    $(this).addClass("is-on3");
    // $(itemChildList).not(this).addClass("blur");
  }
  $(menuItems).hover(onView);
  $(itemChildList).hover(onViewLvTwo);
  $(itemChildLvtwo).hover(onViewLvThree);
});
