
$(".nav>li").mouseover(function(){
    if($(this).children().length > 0){
        $(this).children().stop().slideDown(500);
    }
});
$(".nav>li").mouseleave(function(){
    $(this).children(".submenu").stop().slideUp();
});

start();

$(".partner_info img").click(function(){
    $(".modal").show();
});

$(".modal .content button").click(function(){
    $(".modal").hide();
});

var win;
function winOpen(){
    win = window.open('contact.html','child','toolbar = no, location = no, status = no, menubar = no, resizable = no, scrollbars = no, width = 500, height = 300' );
}

var imgs = 2; //이미지 슬라이드의 길이(3개)
var now = 0; //이미지 슬라이드가 맨 처음 보여줄 이미지(1번째)

function start(){
    $(".imgs>img").eq(0).siblings().css({"margin-left":"-2000px"});
    setInterval(function(){slide();},2000);
}
function slide()
{
    now = now == imgs ? 0 : now+=1;
    $(".imgs>img").eq(now-1).css({"margin-left":"-2000px"});
    $(".imgs>img").eq(now).css({"margin-left":"0px"});
}