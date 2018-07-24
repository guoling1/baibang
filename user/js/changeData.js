//选择性别
$("#selectSex").click(function () {
    $(".mask").show()
})
$(".mask p").each(function (index) {
    $(this).click(function () {
        $("#selectSex").html($(this).html());
        $("input[name=sex]").val($(this).html());
        $(".mask").hide()
    })
})