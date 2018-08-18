$('.headCli').click(function () {
    if($(this).html()=='编辑'){
        $(this).html('完成')
        $('.clearCar').show();
        $('.payCar').hide();
    }else {
        $(this).html('编辑')
        $('.clearCar').hide();
        $('.payCar').show();
    }
})
$('.shopList .select').each(function (i) {
    $(this).click(function () {
        if($('.shopList .select').eq(i).hasClass('active')){
            $('.shopList .select').eq(i).removeClass('active')
        }else {
            $('.shopList .select').eq(i).addClass('active')
        }
    })
})
$('.order_title .select').each(function (i) {
    $(this).click(function () {
        if($('.order_title .select').eq(i).hasClass('active')){
            $(this).removeClass('active')
            $('.shopList').eq(i).find('.select').each(function () {
                $(this).removeClass('active')
            })
        }else {
            $(this).addClass('active')
            $('.shopList').eq(i).find('.select').each(function () {
                $(this).addClass('active')
            })
        }
    })
})