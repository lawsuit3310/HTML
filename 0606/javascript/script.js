$(".nav>li").mouseover(function(){
    $(this).children(".submenu").stop().slideDown();
});
$(".nav>li").mouseleave(function(){
    $(this).children(".submenu").stop().slideUp();
});

start();

$(".table tr:nth-child(1)").click(function(){
    $(".modal").addClass("active");
});
$(".content>button").click(function(){
    $(".modal").removeClass("active");
});

var imgs = 2;
var now = 0;

function start(){
    $(".imgs>a>img").eq(0).siblings().css({"margin-left":"-2400px"});
    setInterval(function(){slide();}, 3000);
};
function slide(){
    now = now == imgs ? 0 : now += 1
    $(".text>div").eq(now-1).removeClass("active");
    $(".text>div").eq(now).addClass("active");
    $(".imgs>a>img").eq(now-1).css({"margin-left":"-2400px"});
    $(".imgs>a>img").eq(now).css({"margin-left":"0px"});
};