$("li").click(function () {
    console.log($("li").eq($(this).index()).siblings('i'))
    $("ul i").eq($(this).index()).addClass("select")
    $("li").eq($(this).index()).siblings().children('i').removeClass('select');
})