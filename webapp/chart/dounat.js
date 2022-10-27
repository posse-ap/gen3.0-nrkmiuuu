 'use strict';
   
 //学習言語ドーナツ
 window.onload = function () {
    let context = document.querySelector("#language_doughnut").getContext('2d')
    new Chart(context, {
      type: 'doughnut',
      data: {
        labels: ["HTML", "CSS", "JavaScript", "PHP", "Laravel","SQL","SHELL","情報システム（その他）"],
        datasets: [{
          data: [60, 20, 15, 10, 5]
        }]
      },
      options: {
        responsive: false,
      }
    });
  }

   