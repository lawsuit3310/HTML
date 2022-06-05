var win;
function winOpen(){
    win = window.open('contact.html','child','toolbar = no, scrollbars = no, menubar = no, resizable = no');
};

$(".nav>li").mouseover(function(){
    $(this).children(".submenu").stop().slideDown();
});
$(".nav>li").mouseleave(function(){
    $(this).children(".submenu").stop().slideUp();
});

start();

$(".partner_info").click(function(){
    $(".modal").addClass("active");
});
$(".modal .content button").click(function(){
    $(".modal").removeClass("active");
});

imgs = 2;
now = 0;

function start(){
    $("#imgs>img").eq(0).siblings().fadeOut(2000);
    setInterval(function(){slide();},2000);
}

function slide(){
    now =  now == imgs? 0 : now + 1;
    $("#imgs>img").eq(now-1).siblings().fadeOut(2000);
    $("#imgs>img").eq(now).siblings().fadeIn(2000);
}