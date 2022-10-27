'use strict';

// 学習コンテンツドーナツ
   window.onload = function () {
    let context = document.querySelector("#content_doughnut").getContext('2d')
    new Chart(context, {
      type: 'doughnut',
      data: {
        labels: ["N予備校", "ドットインストール", "POSSE課題"],
        datasets: [{
          data: [70, 20, 10]
        }]
      },
      options: {
        responsive: false,
      }
    });
  }

  