$(".tab li").click(function() {
    $(".tab li").eq($(this).index()).addClass("active").siblings().removeClass('active');
    $(".public").hide().eq($(this).index()).show();
    $(".public").eq($(".tab li").index(this)).addClass("on").siblings().removeClass('on');

});