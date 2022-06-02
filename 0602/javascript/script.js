$(".nav>li").mouseover(function(){
    $(this).children(".submenu").stop().slideDown();
});
$(".nav>li").mouseleave(function(){
    $(this).children(".submenu").stop().slideUp();
});
$(".btn_slides_next").click(function(){
    if(!$("#slides li").last().is(":visible")){
        $("#slides li:visible").hide().next("li").fadeIn("40");
        $(".btn_slides_pre").removeClass("off");
    }
    if ($("slides li").last().is(":visible")){
        $(".btn_slides_pre").addClass("off");
    }
});
$(".btn_slides_pre").click(function(){
    if(!$("#slides li").first().is(":visible")){
        $("#slides li:visible").hide().prev("li").fadeIn("40");
        $(".btn_slides_next").removeClass("off");
    }
    if ($("slides li").first().is(":visible")){
        $(".btn_slides_next").addClass("off");
    }
});

$(".partner_info img").click(function(){
    $("#modal").addClass("active");
});
$(".button button").click(function(){
    $("#modal").removeClass("active");
});