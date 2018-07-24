$(".input").click(function () {
    $(".select").toggle()
    $(".jt").toggleClass('active')

})
$(".select li").click(function () {
    $(".select li").eq($(this).index()).addClass("select_active").siblings().removeClass('select_active');
    $(".input").html($(this).text());
    $(".select").hide();
    $(".jt").toggleClass('active');
})
function submit(){
    location.href='decorateConfirm.html'
}