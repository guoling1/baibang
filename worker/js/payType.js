$("#select_pay li").click(function () {
    console.log(111)
    $("#select_pay i").eq($(this).index()).addClass("select")
    $("#select_pay li").eq($(this).index()).siblings().find('i').removeClass('select');
})