$(".hamburger_wrap").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".hamburger_wrap").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});



// カルーセル　スライダー
var splide = new Splide( '.splide', {
  type   : 'loop',
  perPage: 3,
  perMove: 1,
} );

splide.mount();

// カルーセル　スライダー
