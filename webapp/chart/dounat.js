'use strict';

//学習言語ドーナツ
window.onload = function () {
  let context = document.querySelector("#language_doughnut").getContext('2d')
  new Chart(context, {
    type: 'doughnut',
    data: {
      labels: ["HTML", "CSS", "JavaScript", "PHP", "Laravel", "SQL", "SHELL", "情報システム（その他）"],
      datasets: [{
        backgroundColor: [
          "#BB5179", //まだ
          "#2d5591",
          "",
          "#3C00FF"
        ],
        data: [60, 20, 15, 10, 5]
      }]
    },
    options: {
      responsive: false,
    }
  });
}

