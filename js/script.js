$(function () {                            //TOP画面のスライドショー:無限スクロール(slick)
  $('.mainvisual__slider').slick({
    arrows: false,                   //矢印の表示
    dots: false,                     //ドットの表示
    slidesToShow: 1,                 //画面に表示するスライドの数
    slidesToScroll: 1,               //スクロールするスライドの数
    autoplay: true,                  //自動再生
    autoplaySpeed: 0,                //自動再生時のスライド切り替えのスピード
    speed: 5000,                     //フェードのスピード
    swipe: false,                    //スワイプでスクロールする
    pauseOnFocus: false,             //スライドをフォーカスした時に自動再生を一時停止
    pauseOnHover: false,             //マウスオーバー中はスライドを停止する
    variableWidth: false,             //スライドの要素の幅をcssで設定できる
  });
});
jQuery(function ($) {                              //company背景スライドショー
  $('.companySection').bgSwitcher({
    images: ['./img/company01.jpg', './img/company02.jpg', './img/company03.jpg', './img/company04.jpg'], // 切替背景画像を指定
    interval: 8000, // 背景画像を切り替える間隔を指定 3000=3秒
    loop: true, // 切り替えを繰り返すか指定 true=繰り返す　false=繰り返さない
    shuffle: false, // 背景画像の順番をシャッフルするか指定 true=する　false=しない
    effect: "fade", // エフェクトの種類をfade,blind,clip,slide,drop,hideから指定
    duration: 6000, // エフェクトの時間を指定します。
    easing: "linear" // エフェクトのイージングをlinear,swingから指定
  });
});
$(function () {                              //SERVICEのスライドショー：無限スクロール(slick)
  $('.serviceImg__slider').slick({
    arrows: false,
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 5000,
  });
});
//companySection__titleのアニメーション
const CAMPANY_NAME = document.querySelectorAll(".companyArticle__title");       //conpanySection__titleの値をCAMPANY_NAMEとする
for (let i = 0; i < CAMPANY_NAME.length; i++) {                                //変数 i はCAMPANY_NAMEの値までで繰り返す
  const COMPANY_NAME_LETTER = CAMPANY_NAME[i],                                      //i 番目のCAMPANY_NAMEをtargetElementとする
    TEXTS = COMPANY_NAME_LETTER.textContent,                                              //TEXTSはCOMPANY_NAME_LETTERの中のテキストとする
    TEXTS_ARRAY = [];                                                                //TEXTSの配列とする
  COMPANY_NAME_LETTER.textContent = "";                                                   //TEXTSの配列の中にTEXTSを空("")にして返していく
  for (let j = 0; j < TEXTS.split("").length; j++) {                                       //空になって分けられているTEXTSの値までで繰り返す
    TEXTS_ARRAY.push('<span style ="animation-delay:' + j + 's;">' + TEXTS.split("")[j] + '</span>')  //<span>タグで囲ったTEXTSを配列に入れていく
  };                                                                                                      //その時animation-delayをかけて一文字ずつずらしていく
  for (let k = 0; k < TEXTS_ARRAY.length; k++) {                                                       //TEXTSの配列の値までで繰り返す
    COMPANY_NAME_LETTER.innerHTML += TEXTS_ARRAY[k];                                        //TEXTSの中のhtml要素は配列の値 + 1 ずつ増えていく
  };
};
//event__textのアニメーション
const EVENT_TEXTS = document.querySelectorAll(".eventContainer");                                                  //.eventSectionの値をEVENT_TEXTSとする
document.addEventListener("scroll", function () {                                                                   //スクロールするたびに
  for (let i = 0; i < EVENT_TEXTS.length; i++) {                                                                 //EVENT_TEXTSの値より小さい値までで繰り返す
    const EVENT_DISTANCE = EVENT_TEXTS[i].getBoundingClientRect().top + EVENT_TEXTS[i].clientHeight * .1 //画面の高さより画面上部からEVENT_TEXTSの距離が
    if (window.innerHeight > EVENT_DISTANCE) {                                                                 //小さくなった時(EVENT_TEXTSが10%見えた時)
      const EVENT_TEXTS_LETTER = document.querySelectorAll(".event__text");      //companySection__titleと同じ
      for (let i = 0; i < EVENT_TEXTS_LETTER.length; i++) {
        const TEXTS_LETTER = EVENT_TEXTS_LETTER[i],
          TEXTS = TEXTS_LETTER.textContent,
          TEXTS_ARRAY = [];
        TEXTS_LETTER.textContent = "";
        for (let j = 0; j < TEXTS.split("").length; j++) {
          TEXTS_ARRAY.push('<span><span style ="animation-delay:' + ((j * .1) + .3) + 's;">' + TEXTS.split("")[j] + '</span></span>')
        };
        for (let k = 0; k < TEXTS_ARRAY.length; k++) {
          TEXTS_LETTER.innerHTML += TEXTS_ARRAY[k];
        };
      };
    };
  };
});

$(function () {                                         //eventのカーテンとcontactのフェイドイン(event__textのスクロールと違う記述だが内容はほぼ同じ)
  $(window).scroll(function () {                        //windowがscrollされたあとの処理について
    $(".eventImg__wrapper,.contactContainer").each(function () {           //各classがついた要素1つずつ順番に処理
      let position = $(this).offset().top;              //ページ最上部から各classまでの距離を取得して変数に代入
      let scroll = $(window).scrollTop();               //scrollした量を取得して変数に代入
      let windowHeight = $(window).height();            //ウィンドウの高さを取得して変数に代入
      if (scroll > position - windowHeight + 200) {     //スクロール量が要素の位置を超えたとき
        $(this).addClass("show");                      //各classに.showがつく(showのclassがつく)
      };
    });
  });
});
