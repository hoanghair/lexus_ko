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
      if ($(".list__item-child .is_show")) {
        $(".list__item-child").css("transform", "translateX(0)");
      }else if($(".list__item-child .is_show")){
        $(".list__item-child").css("transform", "translateX(-100%)");
      }
    });
  }
  function onViewLvTwo(e) {
    e.preventDefault();
    const targetIdNav = $(this).data("id");
    const childLvTwo = $('.child__lvtwo')
    const itemChildLvTwo = $('.child__lvtwo-item')
    console.log(targetIdNav);

    $(itemChildLvTwo).removeClass("is_show").addClass("off");

    $(itemChildLvTwo).each(function () {
      const targetIdChild = $(this).attr("id");
      console.log(targetIdChild);
      if (targetIdNav === targetIdChild) {
        $(this).addClass("is_show").removeClass("off");
        $("body").css("overflow", "hidden");
      }
      if ($(".child__lvtwo .is_show")) {
        $(".child__lvtwo").css("transform", "translateX(0)");
      }else if($(".child__lvtwo .is_show")){
        $(".child__lvtwo").css("transform", "translateX(-100%)");
      }
    });
  }

  $(".header__menu-item").hover(onView);
  $(".item__child-list li").hover(onViewLvTwo);


  // $(".header__menu-item").mouseleave(function () {
  //   $(".item__child").removeClass("is_show").addClass("off");
  //   $("body").css("overflow", "auto");
  // });
});
