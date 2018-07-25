$("li").click(function () {
    $("ul i").eq($(this).index()).addClass("select")
    $("li").eq($(this).index()).siblings().find('i').removeClass('select');
})