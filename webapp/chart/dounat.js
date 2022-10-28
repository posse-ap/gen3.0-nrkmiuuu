'use strict';

//学習言語ドーナツ

var dataLabelPlugin = {
  afterDatasetsDraw: function (chart, easing) {
      // To only draw at the end of animation, check for easing === 1
      var ctx = chart.ctx;

      chart.data.datasets.forEach(function (dataset, i) {
          var dataSum = 0;
          dataset.data.forEach(function (element){
              dataSum += element;
          });

          var meta = chart.getDatasetMeta(i);
          if (!meta.hidden) {
              meta.data.forEach(function (element, index) {
                  // Draw the text in black, with the specified font
                  ctx.fillStyle = 'rgb(255, 255, 255)';

                  var fontSize = 12;
                  var fontStyle = 'normal';
                  var fontFamily = 'Helvetica Neue';
                  ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);

                  // Just naively convert to string for now
                  var labelString = chart.data.labels[index];
                  var dataString = (Math.round(dataset.data[index] / dataSum * 1000)/10).toString() + "%";

                  // Make sure alignment settings are correct
                  ctx.textAlign = 'center';
                  ctx.textBaseline = 'middle';

                  var padding = 5;
                  var position = element.tooltipPosition();
                  ctx.fillText(labelString, position.x, position.y - (fontSize / 2) - padding);
                  ctx.fillText(dataString, position.x, position.y + (fontSize / 2) - padding);
              });
          }
      });
  }
};

let contextLanguages = document.getElementById('language_doughnut').getContext('2d');

new Chart(contextLanguages, {
  type: 'doughnut',
  data: {
    labels: ["HTML", "CSS", "JavaScript", "PHP", "Laravel", "SQL", "SHELL", "情報システム（その他"],
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
      data: [42, 18, 10, 9, 8, 7, 6, 5]
    }]
  },
  options: {
    legend: {
      position: 'bottom'
    },
    responsive: false,
    plugins: {
      font: {
        weight: 'bold',
        size: 20,
      },
      formatter: (value, contextLanguages) => {
        return value + '%';
      },
    }
  },
  plugins: [dataLabelPlugin],


})








