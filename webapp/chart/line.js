// (function () {
//     'use strict'
//     // 棒グラフ
//     var type = 'bar';
    
//     var data = {
//         labels: [2,4,6,8,10,12,14,16,18,20,22,24,26,28,30]
//         datasets: [{
//             label: '@taguchi',
//             data: [2,4,6,8,10,12,14,16,18,20,22,24,26,28,30],
//             borderColor: 'red',
//             // 枠線をなくしたい
//             borderWidth: 0,
//             fill: false,
//             // ポイントのマーク
//             pointStyle: 'rect'
//         }]
//     };
//     // 0から始まるグラフにしたい
//     var options = {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     // suggestedにするといい感じに調整してくれる
//                     suggestedMin: 0h,
//                     suggestedMax: 8h,
//                     // 2hきざみにする
//                     stepsize: 2h
//                 }
//             }]
//         },
//         // Chart全体の設定
//         // デフォルトでアニメーションがついているが、それをやめたいとき
//         animation: {
//             duration: 0
//         },
//         // 凡例の設定
//         legend: {
//             position: 'bottom'
//         }
//     };
//     let ctx = document.getElementById('linegraph').getContext('2d');
//     let myChart = new Chart(ctx, {
//         type: type,
//         data: data,
//         options: options
//     });
// })();

window.onload = function () {
    let context = document.querySelector("#sushi_circle").getContext('2d')
    new Chart(context, {
      type: 'doughnut',
      data: {
        labels: ["サーモン", "ハマチ", "マグロ", "サバ", "エンガワ"],
        datasets: [{
          data: [60, 20, 15, 10, 5]
        }]
      },
      options: {
        responsive: false,
      }
    });
  }
