'use strict';

window.onload = function () {
    let context = document.querySelector("#line_chart").getContext('2d')
    new Chart(context, {
        // 実際に表示したいグラフのデータ
        type: 'bar',
        data: {
            labels: ['', '2', '', '4', '', '6','','8', '', '10', '', '12','', '14', '', '16', '', '18','','20', '', '22', '', '24','', '26', '', '28','','30'],
            datasets: [{
                // label: "日本の人口推移",
                data: [2, 3, 2.5, 4, 3, 6, 5,6.6, 7.5, 7, 3, 5, 6, 5, 7, 3, 5, 4, 2, 5, 4, 2, 6, 5, 7, 6, 5, 5, 4,6],
                backgroundColor:'#4699ca'
            }],
        },
        options: {
            // responsive: false
            scales: {
                yAxes: [{
                    ticks: {
                        suggestedMax: 8,
                        suggestedMin: 0,
                        stepSize: 2,
                        callback: function(value, index, values){
                            return  value +  'h'
                          }
                    },
                    gridLines: false
                }],
                xAxes:[
                    {
                        gridLines: false
                    }
                ]
            }
        },
    })
}















