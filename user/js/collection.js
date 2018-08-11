$(".tab").click(function() {
    $(".tab").eq($(this).index()).addClass("active").siblings().removeClass('active');
    $(".strategy_list").hide().eq($(this).index()).show();
    //另一种方法: $("div").eq($(".tab li").index(this)).addClass("on").siblings().removeClass('on');

});