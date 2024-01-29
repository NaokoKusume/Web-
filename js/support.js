
document.getElementById('menu').addEventListener('click',e => {
  e.preventDefault()
  document.getElementById('nav').classList.add('active')
  document.getElementById('mask').classList.add('active')
})

document.getElementById('mask').addEventListener('click',function(){
  this.classList.remove('active')
  document.getElementById('nav').classList.remove('active')
})

//アコーディオンをクリックした時の動作
$('.title').on('click', function() {//タイトル要素をクリックしたら
  $('.box').slideUp(500);//クラス名.boxがついたすべてのアコーディオンを閉じる
    
  var findElm = $(this).next(".box");//タイトル直後のアコーディオンを行うエリアを取得
    
  if($(this).hasClass('close')){//タイトル要素にクラス名closeがあれば
    $(this).removeClass('close');//クラス名を除去    
  }else{//それ以外は
    $('.close').removeClass('close'); //クラス名closeを全て除去した後
    $(this).addClass('close');//クリックしたタイトルにクラス名closeを付与し
    $(findElm).slideDown(500);//アコーディオンを開く
  }
});
