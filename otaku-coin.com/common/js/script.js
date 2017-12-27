//pagetop
$(function() {
    var topBtn = $('.pagebt');
    topBtn.hide();
    //スクロールが100に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1000) {
        //ボタンの表示方法
            topBtn.fadeIn();
        } else {
        //ボタンの非表示方法
            topBtn.fadeOut();
        }
    });
});


