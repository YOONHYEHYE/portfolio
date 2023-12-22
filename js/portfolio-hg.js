$(function () {
  //--------------------------------------------------------------------------------------------------------------------------------
  let sc = $(".section");
  let myMenu = $("nav li");
  $("#main").fullpage({
    anchors: ["intro", "profile", "Project", "pf_01", "pf_02", "pf_03", "pf_04", "pf_05", "pf_06"],
    responsiveWidth: 768,
    menu: "#myMenu",
    afterLoad: function (origin, destination, direction) {
      console.log(destination.index);
      let idx = destination.index;
      sc.eq(idx).addClass("on").siblings().removeClass("on");
      myMenu.eq(idx).addClass("on").siblings().removeClass("on");
    },
  });

  $(".headerBtn").on("click", function () {
    $(this).toggleClass("on");
    $(".header_menu").fadeToggle();
  });

  $(".header_menu a").on("click", function () {
    $(".header_menu").fadeToggle();
    $(".headerBtn").removeClass("on");
  });

  //그래픽 팝업-----------------------------------------
  //p_01
  $(".pf_06 .gp01 .txt a").on("click", function () {
    $(".pf_06 .con_in .p_01").show();
    $(".pf_06 .con_in .p_01").addClass("on");
    if ($(".pf_06.con_in .p_01").addClass("on")) {
      $.fn.pagepiling.setAllowScrolling(false);
    } else {
      $.fn.pagepiling.setAllowScrolling(true);
    }
    return false;
  });
  $(".pf_06 .con_in .p_01 .bkg>a").on("click", function () {
    $(".pf_06 .con_in .p_01").hide();
    $(".pf_06 .con_in .p_01").removeClass("on");
    return false;
  });
  //p_02
  $(".pf_06 .gp02 .txt a").on("click", function () {
    $(".pf_06 .con_in .p_02").show();
    $(".pf_06 .con_in .p_02").addClass("on");
    if ($(".pf_06 .con_in .p_02").addClass("on")) {
      $.fn.pagepiling.setAllowScrolling(false);
    } else {
      $.fn.pagepiling.setAllowScrolling(true);
    }
    return false;
  });
  $(".pf_06 .con_in .p_02 .bkg>a").on("click", function () {
    $(".pf_06 .con_in .p_02").hide();
    $(".pf_06 .con_in .p_02").removeClass("on");
    return false;
  });
  //p_03
  $(".pf_06 .gp03 .txt a").on("click", function () {
    $(".pf_06 .con_in .p_03").show();
    $(".pf_06 .con_in .p_03").addClass("on");
    if ($(".pf_06 .con_in .p_03").addClass("on")) {
      $.fn.pagepiling.setAllowScrolling(false);
    } else {
      $.fn.pagepiling.setAllowScrolling(true);
    }
    return false;
  });
  $(".pf_06 .con_in .p_03 .bkg>a").on("click", function () {
    $(".pf_06 .con_in .p_03").hide();
    $(".pf_06 .con_in .p_03").removeClass("on");
    return false;
  });
  //p_04
  $(".pf_06 .gp04 .txt a").on("click", function () {
    $(".pf_06 .con_in .p_04").show();
    $(".pf_06 .con_in .p_04").addClass("on");
    if ($(".pf_06 .con_in .p_04").addClass("on")) {
      $.fn.pagepiling.setAllowScrolling(false);
    } else {
      $.fn.pagepiling.setAllowScrolling(true);
    }
    return false;
  });
  $(".pf_06 .con_in .p_04 .bkg>a").on("click", function () {
    $(".pf_06 .con_in .p_04").hide();
    $(".pf_06 .con_in .p_04").removeClass("on");
    return false;
  });
  //p_05
  $(".pf_06 .gp05 .txt a").on("click", function () {
    $(".pf_06 .con_in .p_05").show();
    $(".pf_06 .con_in .p_05").addClass("on");
    if ($(".pf_06 .con_in .p_05").addClass("on")) {
      $.fn.pagepiling.setAllowScrolling(false);
    } else {
      $.fn.pagepiling.setAllowScrolling(true);
    }
    return false;
  });
  $(".pf_06 .con_in .p_05 .bkg>a").on("click", function () {
    $(".pf_06 .con_in .p_05").hide();
    $(".pf_06 .con_in .p_05").removeClass("on");
    return false;
  });
  //p_06
  $(".pf_06 .gp06 .txt a").on("click", function () {
    $(".pf_06 .con_in .p_06").show();
    $(".pf_06 .con_in .p_06").addClass("on");
    if ($(".pf_06 .con_in .p_06").addClass("on")) {
      $.fn.pagepiling.setAllowScrolling(false);
    } else {
      $.fn.pagepiling.setAllowScrolling(true);
    }
    return false;
  });
  $(".pf_06 .con_in .p_06 .bkg>a").on("click", function () {
    $(".pf_06 .con_in .p_06").hide();
    $(".pf_06 .con_in .p_06").removeClass("on");
    return false;
  });
  //p_07
  $(".pf_06 .gp07 .txt a").on("click", function () {
    $(".pf_06 .con_in .p_07").show();
    $(".pf_06 .con_in .p_07").addClass("on");
    if ($(".pf_06 .con_in .p_07").addClass("on")) {
      $.fn.pagepiling.setAllowScrolling(false);
    } else {
      $.fn.pagepiling.setAllowScrolling(true);
    }
    return false;
  });
  $(".pf_06 .con_in .p_07 .bkg>a").on("click", function () {
    $(".pf_06 .con_in .p_07").hide();
    $(".pf_06 .con_in .p_07").removeClass("on");
    return false;
  });
  //p_08
  $(".pf_06 .gp08 .txt a").on("click", function () {
    $(".pf_06 .con_in .p_08").show();
    $(".pf_06 .con_in .p_08").addClass("on");
    if ($(".pf_06 .con_in .p_08").addClass("on")) {
      $.fn.pagepiling.setAllowScrolling(false);
    } else {
      $.fn.pagepiling.setAllowScrolling(true);
    }
    return false;
  });
  $(".pf_06 .con_in .p_08 .bkg>a").on("click", function () {
    $(".pf_06 .con_in .p_08").hide();
    $(".pf_06 .con_in .p_08").removeClass("on");
    return false;
  });
  //--------------------------------------------------------------------------------------------------------------------------------
});
