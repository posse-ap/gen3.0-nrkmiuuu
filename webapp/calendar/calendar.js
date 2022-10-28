'use strict';

console.clear();

{
    const today = new Date();
    // 日付を固定
    let year = today.getFullYear();
    let month = today.getMonth(); //5月

    //前月の日付を取得
    function getCalenderHead() {
        const dates = [];
        const d = new Date(year, month, 0).getDate()
        //今月の 1 日のオブジェクトが、週の何日目かを取得
        const n = new Date(year, month, 1).getDay();

        for (let i = 0; i < n; i++) {
            //30
            //29,30
            //28,29,30
            dates.unshift({
                date: d - i,
                //isToday   Todayクラスをつけるかどうか
                isToday: false,
                //isDisabled 薄くするか
                isDisabled: true,
            });
        }

        return dates;
    }

    // カレンダーの日付の本体
    function getCalenderBody() {
        const dates = []; //date日付、 day曜日
        const lastDate = new Date(year, month + 1, 0).getDate();

        for (let i = 1; i <= lastDate; i++) {
            // オブジェクトのプロパティにする
            dates.push({
                dates: i,
                isToday: false,
                isDisabled: false,
            });
        }

        //year が today の getFullYear() と同じ、なおかつ、 month が today の getMonth() と同じだったら、今日の日付を太字にしたい
        if (year === today.getFullYear() && month === today.getMonth()) {
            //今日の日付を太字にする
            dates[today.getDate() - 1].isToday = true;
        }

        return dates;
    }

    function getCalenderTail() {
        const dates = [];
        const lastDay = new Date(year, month + 1, 0).getDay();

        for (let i = 1; i < 7 - lastDay; i++) {
            dates.push({
                date: i,
                isToday: false,
                isDisabled: true,
            });
        }

        return dates;
    }


    function clearCalendar() {
        //createCalender() するたびに tbody の中身をクリア
        const tbody = document.querySelector('tbody');
        //tbody の最初の子要素がある限り、 tbody からその最初の子要素を削除
        while (tbody.firstChild) {
            tbody.removeChild(tbody.firstChild);
        }
    }

    function renderTitle() {
        //月が 1 桁のときは最初に 0 を足す
        // padStart() は文字列にしか使えないので String() でいったん文字列にしてあげて、 padStart() を使う
        const title = `${year}年${String(month + 1).padStart(2, '0')}月`;  // 2桁で表示してね、それに満たなかったら 0 の文字列で埋めてね
        document.getElementById('title').textContent = title;
    }

    function renderWeeks() {
        const dates = [
            //それぞれの関数をよびだす
            //全ての要素を１つの配列の中で展開するのでスプレッド構文を使う
            ...getCalenderHead(),
            ...getCalenderBody(),
            ...getCalenderTail(),
        ];
        //7日文ごとの配列に分ける
        //週ごとの配列をいれる空の配列をつくる
        const weeks = [];
        //何週分あるかは dates の個数を 7 で割ってあげる
        const weeksCount = dates.length / 7;
        //weeksCount の数だけ、ループを回してあげる
        for (let i = 0; i < weeksCount; i++) {
            //weeks に対して 7 日分ごとの日付の配列を push()
            //dates から 7 日分のデータを取るには、 splice() を使って先頭から 7 個分を削除しつつ取り出してね
            weeks.push(dates.splice(0, 7));
        }

        //weeksを使ってHTMLの方に描画していく
        //週ごとに処理をしていきたいので forEach() を回してあげる
        //取り出した配列を week としつつ、次の処理をしてね
        weeks.forEach(week => {
            //weekごとに行をつくっていきたい
            const tr = document.createElement('tr');
            //取り出した要素をdateにしつつ次の処理をしてねと書く
            week.forEach(date => {
                const td = document.createElement('td');
                
                //textContent プロパティを date の date プロパティにしてあげれば、日付が入る
                td.textContent = date.date;
                //isToday プロパティが true だったら today クラスをつけるようにしてあげる
                if (date.isToday) {
                    td.classList.add('today');
                }
                // isDisabled プロパティが true だったら disabled クラスをつけるようにする
                if (date.isDisabled) {
                    td.classList.add('disabled');
                }
                // td 要素ができたので、 tr 要素の子要素の末尾に追加
                tr.appendChild(td);

                //追加
                td.addEventListener('click', () => {
            
                    const yearMonth = document.getElementById('title');
                    const selectedDate = yearMonth.innerHTML+td.innerHTML+'日';
                    console.log(selectedDate)
                    const inputDate = document.getElementById('date');
                    inputDate.value = selectedDate;
                    const modalCalendar = document.querySelector('.modal_calendar');
                    const modalMain = document.querySelector('.modal_main');
                    modalCalendar.style.display = 'none';
                    modalMain.style.display = 'block';
        
                })
            });
            document.querySelector('tbody').appendChild(tr);
        })
    }

    function createCalender() {
        //clearCalendar,renderTitle,renderWeeksをよびだす
        clearCalendar();
        renderTitle();
        renderWeeks();
    }

    //クリックしたら次の処理をしてねとかく
    document.getElementById('prev').addEventListener('click', () => {
        month--;
        if (month < 0) {
            year--;
            month = 11;
        }

        createCalender()
    })

    // document.getElementById('today').addEventListener('click', () => {
    //     year = today.getFullYear();
    //     month = today.getMonth();
    //     createCalender()
    // });

    document.getElementById('next').addEventListener('click', () => {
        month++;
        if (month > 11) {
            year++;
            month = 0;
        }

        createCalendar();
    });

    createCalender();

}
