var imgs = 2;
var now = 0;

$(".nav li").mouseover(function(){
    $(this).children(".submenu").stop().slideDown();
});
$(".nav li").mouseleave(function(){
    $(this).children(".submenu").stop().slideUp();
});

start();

$(".notice tr:nth-child(1").click(function(){
    $(".modal").addClass("active");
});
$(".button").click(function(){
    $(".modal").removeClass("active");
})

function start(){
    $(".imgs>img").eq(0).siblings().css({"margin-left":"-2400px"});
    setInterval(function(){slide();},3000);
}

//slide에선 siblings() 안써줌
function slide(){
    now = now == imgs? 0 : now += 1;
    $(".imgs>img").eq(now-1).css({"margin-left":"-2400px"});
    $(".imgs>img").eq(now).css({"margin-left":"0px"});
}
