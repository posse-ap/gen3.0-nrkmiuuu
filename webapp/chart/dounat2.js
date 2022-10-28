'use strict';

// 学習コンテンツドーナツ

  //  window.onload = function () {

    let contextContents = document.getElementById('content_doughnut').getContext('2d');

    new Chart(contextContents, {
      type: 'doughnut',
      data: {
        labels: ["N予備校", "ドットインストール", "POSSE課題"],
        datasets: [{
          data: [70, 20, 10],
          backgroundColor: [
            "#4257f5",
            "#2d5591",
            "03d7fc"
          ]
        }]
      },
      options: {
        legend: {
          position: 'bottom'
        },
        responsive: false,
      }
    })
  // }

  