//选择性别
$(".middleBottom").click(function () {
    $(".mask").show()
})
$(".close").click(function () {
    $(".mask").hide()
})

$(".tab").click(function() {
    $(".tab").eq($(this).index()).addClass("active").siblings().removeClass('active');
    $(".detailCon").hide().eq($(this).index()).show();
    //另一种方法: $("div").eq($(".tab li").index(this)).addClass("on").siblings().removeClass('on');

});