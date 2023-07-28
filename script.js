$(document).ready(function () {
  const menuItems = $(".header__menu-item");
  const itemChildList = $(".item__child-list li");
  const itemChildLvtwo = $(".child__lvtwo-item ul li");
  const listItemChild = $(".header__menu-child");
  const itemChild = $(".item__child");
  const childsLv2 = $(".child__lvtwo");
  const childsLv3 = $(".child__lvthree");
  const isClose = $(".btn__close")


  // const itemChildLvThree = $(".lvtwo__list ul li");

  menuItems.hover(function () {
    menuItems.removeClass("on blur");
    $(this).addClass("on");
    menuItems.not(this).addClass("blur");
    $(".overlay").css("display", "block");
  });

  function onView(e) {
    e.preventDefault();
    const targetIdNav = $(this).data("id");
    // const itemChild = $(".item__child");
    // const listItemChild = $(".header__menu-child");

    $(listItemChild).removeClass("off").addClass("is_show");
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
    // const childsLv2 = $(".child__lvtwo");
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
    const targetIdNavLv3 = $(this).data("id");
    console.log(targetIdNavLv3);

    // const childsLv3 = $(".child__lvthree");
    const itemChildLv3 = $(".child__lvthree-item");

    // $(itemChildList).removeClass("is-on");
    // $(this).addClass("is-on");

    $(childsLv3).removeClass("is_show").addClass("off");
    $(itemChildLv3).removeClass("is_show").addClass("off");

    $(itemChildLv3).each(function () {
      const targetIdChild3 = $(this).attr("id");
      console.log(targetIdChild3);
      if (targetIdNavLv3 === targetIdChild3) {
        $(childsLv3).addClass("is_show").removeClass("off");
        $(this).addClass("is_show").removeClass("off");
        $("body").css("overflow", "hidden");
      }
    });
  }

  function itemActive(e) {
    e.preventDefault();
    $(itemChildLvtwo).removeClass("is-active");
    $(this).addClass("is-active");
    // $(itemChildList).not(this).addClass("blur");
  }
  function closeNav(e) {
    e.preventDefault();
    // $(listItemChild).addClass("off");
    $(listItemChild).css("transform", "translateX(-1000%)");
    $(".overlay").css("display", "none");

    $(menuItems).removeClass("on blur");
    $(menuItems).addClass("on");
    $(itemChild).removeClass("is_show").addClass("off");
    $(itemChildList).removeClass("is-on");
    $(itemChildLvtwo).removeClass("is-active");
    $(childsLv2).removeClass("is_show").addClass("off");
    $(childsLv3).removeClass("is_show").addClass("off");
    $("body").css("overflow", "auto");

  }

  $(menuItems).hover(onView);
  $(itemChildList).hover(onViewLvTwo);
  $(itemChildLvtwo).hover(itemActive);
  $(itemChildLvtwo).hover(onViewLvThree);
  $(isClose).click(closeNav);
});
