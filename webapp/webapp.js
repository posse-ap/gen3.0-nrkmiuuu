'use strict'

//--------------モーダルウィンドウ-----------------------
// ボタン、モダル、モダルの閉じるボタン、オーバーレイを変数に格納
const btn = document.querySelector('.header-log');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close');
const overlay = document.querySelector('.overlay');

// ボタンをクリックしたら、モダルとオーバーレイに.activeを付ける
btn.addEventListener('click', function(e){
    // aタグのデフォルトの機能を停止する
    e.preventDefault();
    // モーダルとオーバーレイにactiveクラスを付与する
    modal.classList.add('active');
    overlay.classList.add('active');
  });

// モダルの閉じるボタンをクリックしたら、モダルとオーバーレイのactiveクラスを外す
closeBtn.addEventListener('click', function(){
    modal.classList.remove('active');
    overlay.classList.remove('active');
  });
  
  // オーバーレイをクリックしたら、モダルとオーバーレイのactiveクラスを外す
  overlay.addEventListener('click', function() {
    modal.classList.remove('active');
    overlay.classList.remove('active');
  });

//----------------- モーダルウィンドウ内の記録・投稿完了----------------------
// ボタン、モダル、モダルの閉じるボタン、オーバーレイを変数に格納
const btn2 = document.querySelector('.header-next');
const modal2 = document.querySelector('.modal2');
const closeBtn2 = document.querySelector('.close2');
const overlay2 = document.querySelector('.overlay2');

// ボタンをクリックしたら、モダルとオーバーレイに.activeを付ける
btn2.addEventListener('click', function(e){
    // aタグのデフォルトの機能を停止する
    e.preventDefault();
    // モーダルとオーバーレイにactiveクラスを付与する
    modal2.classList.add('active');
    overlay2.classList.add('active');
  });

// モダルの閉じるボタンをクリックしたら、モダルとオーバーレイのactiveクラスを外す
closeBtn.addEventListener('click', function(){
    modal2.classList.remove('active');
    overlay2.classList.remove('active');
  });
  
  // オーバーレイをクリックしたら、モダルとオーバーレイのactiveクラスを外す
  overlay2.addEventListener('click', function() {
    modal2.classList.remove('active');
    overlay2.classList.remove('active');
  });







  // ローディング
  $('#loading').delay(3000).queue(function() {
    $(this).addClass('loaded').dequeue();
});

//タイムセットアウト
setTimeout [function() {
  console.log("test2");
}, 3000)