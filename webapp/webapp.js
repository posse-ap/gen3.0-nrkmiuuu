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
    console.log('zero')
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

const modal3 = document.querySelector('.modal3');
const overlay3 = document.querySelector('.overlay3');

// ボタンをクリックしたら、モダルとオーバーレイに.activeを付ける
btn2.addEventListener('click', function(e){
    // aタグのデフォルトの機能を停止する
    e.preventDefault();
    // モーダルとオーバーレイにactiveクラスを付与する
    modal2.classList.add('active');
    overlay2.classList.add('active');
    modal.classList.remove('active');
    overlay.classList.remove('active');
    console.log('one')
    setTimeout(afterLoading,3000);
  });

// モダルの閉じるボタンをクリックしたら、モダルとオーバーレイのactiveクラスを外す
closeBtn2.addEventListener('click', function(){
    modal2.classList.remove('active');
    overlay2.classList.remove('active');
  });
  
  // オーバーレイをクリックしたら、モダルとオーバーレイのactiveクラスを外す
  overlay2.addEventListener('click', function() {
    modal2.classList.remove('active');
    overlay2.classList.remove('active');
  });


  // カレンダーのモーダル
  //----------------- モーダルウィンドウ内の記録・投稿完了----------------------
// ボタン、モダル、モダルの閉じるボタン、オーバーレイを変数に格納
// const btn4 = document.querySelector('.header-next');
// const modal2 = document.querySelector('.modal2');
// const closeBtn4 = document.querySelector('.close2');
// const overlay4 = document.querySelector('.overlay2');

// ボタンをクリックしたら、モダルとオーバーレイに.activeを付ける
// btn4.addEventListener('click', function(e){
    // aタグのデフォルトの機能を停止する
    // e.preventDefault();
    // モーダルとオーバーレイにactiveクラスを付与する
  //   modal4.classList.add('active');
  //   overlay4.classList.add('active');
  //   console.log('two')
  // });

// モダルの閉じるボタンをクリックしたら、モダルとオーバーレイのactiveクラスを外す
// closeBtn4.addEventListener('click', function(){
//     modal4.classList.remove('active');
//     overlay4.classList.remove('active');
  // });
  
  // オーバーレイをクリックしたら、モダルとオーバーレイのactiveクラスを外す
  // overlay4.addEventListener('click', function() {
  //   modal4.classList.remove('active');
  //   overlay4.classList.remove('active');
  // });







  // ローディング
  //   $('#loading').delay(3000).queue(function() {
    //     $(this).addClass('loaded').dequeue();
    // });
    
    //タイムセットアウト
    const afterLoading = function(){
      modal2.classList.remove('active');
      overlay2.classList.remove('active');
      modal3.classList.add('active');
      overlay3.classList.add('active');
    }
    
    

// ボタン、モダル、モダルの閉じるボタン、オーバーレイを変数に格納
// const btn3 = document.querySelector('.header-next');
// const closeBtn3 = document.querySelector('.close3');

// ボタンをクリックしたら、モダルとオーバーレイに.activeを付ける
// btn3.addEventListener('click', function(e){
    // aタグのデフォルトの機能を停止する
    // e.preventDefault();
    // モーダルとオーバーレイにactiveクラスを付与する
  //   modal3.classList.add('active');
  //   overlay3.classList.add('active');
  //   setTimeout(afterLoading,3000);
  // });

// モダルの閉じるボタンをクリックしたら、モダルとオーバーレイのactiveクラスを外す
// closeBtn3.addEventListener('click', function(){
//     modal3.classList.remove('active');
//     overlay3.classList.remove('active');
  // });
  
  // オーバーレイをクリックしたら、モダルとオーバーレイのactiveクラスを外す
  // overlay3.addEventListener('click', function() {
  //   modal3.classList.remove('active');
  //   overlay3.classList.remove('active');
  // });


// const complete = document.querySelector('.modal_complete');
//   const aftermodal = () => {
//     complete.style.display = 'block';
//     modalLoading.style.display = 'none'
//   }
// const modalBtn = document.querySelector('.modal_btn');

//   modalBtn.addEventListener('click', () => {
//     console.log('hello');
//     modalMain.style.display = 'none';
//     modalLoading.style.display = 'block';
//     if (document.getElementById('share').checked) {
//       openTwitter();
//     }
//     setTimeout(aftermodal, 5000);
//   })


// const $loader =$('.loader')

// ローディングになったら前のモーダルを消す
























// ふみや
// const $loading = $('.loading-wrapper');
// const $header_log = $('.header-log');
// const $done = $('.done');

// $header_log.click(e) => {
//   //モーダルの画面をとじる
//   $container.addClass('vanish');
//   //入れ替わりでローディングを表示
//   $loading.addClass('openLoading');
//   //3秒で閉じる
//   setTimeout(() => {
//     $done.addClass('openDone');
//   },3000);
// };