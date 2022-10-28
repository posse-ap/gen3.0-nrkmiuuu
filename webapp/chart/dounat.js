'use strict';

//学習言語ドーナツ

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
  },
  options: {
    legend: {
      position: 'bottom'
    },
    responsive: false,
  }
})

// Chart.jsのプラグイン機能
// Define a plugin to provide data labels
Chart.plugins.register({
  afterDatasetsDraw: function (chart, easing) {
    // To only draw at the end of animation, check for easing === 1
    var ctx = chart.ctx;

    chart.data.datasets.forEach(function (dataset, i) {
      var meta = chart.getDatasetMeta(i);
      if (!meta.hidden) {
        meta.data.forEach(function (element, index) {
          // Draw the text in black, with the specified font
          ctx.fillStyle = 'rgb(0, 0, 0)';

          var fontSize = 20;
          var fontStyle = 'normal';
          var fontFamily = 'Helvetica Neue';
          ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);

          // Just naively convert to string for now
          var dataString = dataset.data[index].toString();

          // Make sure alignment settings are correct
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';

          var padding = 5;
          var position = element.tooltipPosition();
          ctx.fillText(dataString, position.x, position.y - (fontSize / 2) - padding);
        });
      }
    });
  }
});

