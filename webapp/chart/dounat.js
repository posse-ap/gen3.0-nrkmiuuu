(function () {
    'use strict';
    // ドーナツグラフ
    var type = 'doughnut'
    var data = {
        labels: [JavaScript, CSS, PHP, HTML, laravel, SQL, SHELL, 情報システム(その他)],
        datasets: [{
            //それに対する回答数
            data: [42, 18, 10, 9, 8, 7, 2, 1],
            borderColor: ['#1760a0', '#3b82c4', '#3aacad', '#00a5dd', '#c5a3cb', '#9944cc', '#0000b1', '193278']
        }]
    };
    // ドーナツ型の真ん中の穴を調整
    var options = {
        cutoutPercentage: 40
    }
    // Chart全体の設定
    // chartのタイトルの設定
    // titile: {
    //     display: true,
    //     text: 'Annual Sales',
    //     FontSize: 18,
    //     position: 'left'
    // },
    // デフォルトでアニメーションがついているが、それをやめたいとき
    animation: {
        duration: 0
    };
    
    // 凡例の設定
    legend: {
        position: 'right'
    }
};
var ctx = document.getElementById('my_chart').getContext('2d');
var myChart = new Chart(ctx, {
    type: type,
    data: data,
    options: options
});
