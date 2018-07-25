$(".left li").click(function () {
    $(".left li").eq($(this).index()).addClass("active").siblings().removeClass('active')
})