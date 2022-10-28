'use strict';

//学習言語ドーナツ
// window.onload = function () {

  let contextLanguages = document.getElementById('language_doughnut').getContext('2d');

  new Chart(contextLanguages, {
    type: 'doughnut',
    data: {
      labels: ["HTML", "CSS", "JavaScript", "PHP", "Laravel", "SQL", "SHELL", "情報システム（その他）"],
      datasets: [{
        backgroundColor: [
          "#4257f5", 
          "#2d5591",
          "#03d7fc",
          "#3C00FF",
          "#f003fc",
          "#9003fc",
          "#6203fc",
          "#1303fc",
          
        ],
        data: [60, 20, 15, 10, 5]
      }]
    }
    // options: {
    //   responsive: false,
    // }
  })
// }

