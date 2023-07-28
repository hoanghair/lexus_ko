$(document).ready(function () {
  const menuItems = $(".header__menu-item");
  const itemChildList = $(".item__child-list li");
  const itemChildLvtwo = $(".child__lvtwo-item ul li");
  const listItemChild = $(".header__menu-child");
  const itemChild = $(".item__child");
  const childsLv2 = $(".child__lvtwo");
  const childsLv3 = $(".child__lvthree");
  const isClose = $(".btn__close")

  menuItems.hover(function () {
    menuItems.removeClass("on blur");
    $(this).addClass("on");
    menuItems.not(this).addClass("blur");
    $(".overlay").show();
  });

  $(listItemChild).hide();
  function onView(e) {
    e.preventDefault();
    const targetIdNav = $(this).data("id");
    
    $(itemChild).hide();
    
    $(itemChild).each(function() {
      const targetIdChild = $(this).attr("id");
      if (targetIdNav === targetIdChild) {
        $(this).show();
        $(listItemChild).show();
        $("body").css("overflow", "hidden");
      }
      if ($(itemChild).is(":visible")) {
        $(listItemChild).css("transform", "translateX(0)");
      }
    });
  }

  $(childsLv2).hide();
  function onViewLvTwo(e) {
    e.preventDefault();
    const targetIdNavLv2 = $(this).data("id");
    const itemChildLv2 = $(".child__lvtwo-item");

    $(itemChildList).removeClass("is-on");
    $(this).addClass("is-on");
    $(itemChildLv2).hide();

    $(itemChildLv2).each(function () {
      const targetIdChild2 = $(this).attr("id");
      if (targetIdNavLv2 === targetIdChild2) {
        $(childsLv2).show();
        $(this).show();
        $("body").css("overflow", "hidden");
      }
    });
  }

  $(childsLv3).hide();
  function onViewLvThree(e) {
    e.preventDefault();
    const targetIdNavLv3 = $(this).data("id");
    const itemChildLv3 = $(".child__lvthree-item");

    $(itemChildLv3).hide();

    $(itemChildLv3).each(function () {
      const targetIdChild3 = $(this).attr("id");
      console.log(targetIdChild3);
      if (targetIdNavLv3 === targetIdChild3) {
        $(childsLv3).show(); 
        $(this).show();
        $("body").css("overflow", "hidden");
      }
    });
  }

  function itemActive(e) {
    e.preventDefault();
    $(itemChildLvtwo).removeClass("is-active");
    $(this).addClass("is-active");
  }

  function closeNav(e) {
    e.preventDefault();
    $(listItemChild).css("transform", "translateX(-1000%)");
    $(".overlay").hide();
    $(menuItems).removeClass("on blur");
    $(menuItems).addClass("on");
    $(itemChild).hide();
    $(itemChildList).removeClass("is-on");
    $(itemChildLvtwo).removeClass("is-active");
    $(childsLv2).hide();
    $(childsLv3).hide();
    $("body").css("overflow", "auto");
  }

  $(menuItems).hover(onView);
  $(itemChildList).hover(onViewLvTwo);
  $(itemChildLvtwo).hover(itemActive);
  $(itemChildLvtwo).hover(onViewLvThree);
  $(isClose).click(closeNav);
});
