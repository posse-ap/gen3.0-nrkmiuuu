'use strict'

//--------------モーダルウィンドウ-----------------------
// ボタン、モダル、モダルの閉じるボタン、オーバーレイを変数に格納
const btn = document.querySelector('.header-log');
const btnBottom = document.querySelector('.header-log-bottom');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close');
const overlay = document.querySelector('.overlay');

// ボタンをクリックしたら、モダルとオーバーレイに.activeを付ける
btn.addEventListener('click', function (e) {
  // aタグのデフォルトの機能を停止する
  e.preventDefault();
  // モーダルとオーバーレイにactiveクラスを付与する
  modal.classList.add('active');
  overlay.classList.add('active');
});
btnBottom.addEventListener('click', function (e) {
  // aタグのデフォルトの機能を停止する
  e.preventDefault();
  // モーダルとオーバーレイにactiveクラスを付与する
  modal.classList.add('active');
  overlay.classList.add('active');
});

// モダルの閉じるボタンをクリックしたら、モダルとオーバーレイのactiveクラスを外す
closeBtn.addEventListener('click', function () {
  modal.classList.remove('active');
  overlay.classList.remove('active');
});


//----------------- モーダルウィンドウ内の記録・投稿完了----------------------
// ボタン、モダル、モダルの閉じるボタン、オーバーレイを変数に格納
const btn2 = document.querySelector('.header-next');
const modal2 = document.querySelector('.modal2');
const closeBtn2 = document.querySelector('.close2');
const overlay2 = document.querySelector('.overlay2');

const modal3 = document.querySelector('.modal3');
const overlay3 = document.querySelector('.overlay3');

console.log(modal3);

const TwitterText = document.getElementById('twitterSharing');
// ボタンをクリックしたら、モダルとオーバーレイに.activeを付ける
btn2.addEventListener('click', function (e) {
  // aタグのデフォルトの機能を停止する
  e.preventDefault();
  if (TwitterText.checked){
    twitterOpen()
   }
  console.log('pressed');

  // モーダルとオーバーレイにactiveクラスを付与する
  modal2.classList.add('active');
  overlay2.classList.add('active');
  modal.classList.remove('active');
  overlay.classList.remove('active');
  setTimeout(afterLoading, 3000);



  //３を消しておいて3秒たったら３を出現させる
  modal3.classList.remove('active');
  // modal.classList.add('active');

//twitterをひらく
  function twitterOpen(){
    const text = document.getElementById('modal_comment').value;
    const turl = 'https://twitter.com/intent/tweet?text=' + text
    window.open(turl,'_blank');
  }
  
  openTwitter("テスト", "https://twitter.com/intent/tweet?text=any_text", "santmove", "santmove_com");
});

// モダルの閉じるボタンをクリックしたら、モダルとオーバーレイのactiveクラスを外す
closeBtn2.addEventListener('click', function () {
  modal2.classList.remove('active');
  overlay2.classList.remove('active');
});


//タイムセットアウト
const afterLoading = function () {
  modal2.classList.remove('active');
  overlay2.classList.remove('active');
  modal3.classList.add('active');
  overlay3.classList.add('active');
};

//カレンダー
var learningTime = document.getElementById('learningTime');
var fp = flatpickr(learningTime);

var learningTime = document.getElementById('learningTime');
var fp = flatpickr(learningTime, {
    dateFormat: 'Y-n-j(l)' // フォーマットの変更
});


