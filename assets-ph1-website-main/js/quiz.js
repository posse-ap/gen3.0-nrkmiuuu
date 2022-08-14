'use strict';
//  厳格モード コード内に存在する潜在的な問題を早期に発見しやすい

{
  // 回答一覧
  const CORRECT_ANSWERS = [
    // constとは値書き換えを禁止した変数を宣言する方法
    {
      index: 1,
      // JavaScriptでその要素が、ある集合の中で何番目にあるかを知りたい
      value: '約79万人'
    },
    {
      index: 2,
      value: 'X-TECH'
    },
    {
      index: 0,
      value: 'Internet of Things'
    },
    {
      index: 0,
      value: 'Society 5.0'
    },
    {
      index: 0,
      value: 'Web3.0'
    },
    {
      index: 1,
      value: '約5倍'
    }
  ];

  // すべての問題を取得
  const allQuiz  = document.querySelectorAll('.js-quiz');
  // 「document」は、documentオブジェクトと呼ばれ、Chrome等のブラウザ上で表示されたドキュメントを操作する事ができる。ここで言うオブジェクトとは、プログラミング言語で操作ができるデータを意味する

  // buttonタグにdisabledを付与
  const setDisabled = answers => {
    answers.forEach(answer => {
      // forEach メソッドを使うと配列に含まれる要素を順に取り出しコールバック関数へ渡して処理を行う
      answer.disabled = true;
    })
  }
  // trueかfalseで出力する文字列を出し分ける
  const setTitle = (target, isCorrect) => {
    target.innerText = isCorrect ? '正解！' : '不正解...';
  }
  const setClassName = (target, isCorrect) => {
    target.classList.add(isCorrect ? 'is-correct' : 'is-incorrect');
  }

  // 各問題の中での処理
  allQuiz.forEach(quiz => {
    const answers = quiz.querySelectorAll('.js-answer');
    const selectedQuiz = Number(quiz.getAttribute('data-quiz'));
    const answerBox = quiz.querySelector('.js-answerBox');
    const answerTitle = quiz.querySelector('.js-answerTitle');
    const answerText = quiz.querySelector('.js-answerText');

    answers.forEach(answer => {
      answer.addEventListener('click', () => {
        answer.classList.add('is-selected');
        const selectedAnswer = Number(answer.getAttribute('data-answer'));

        // 全てのボタンを非活性化
        setDisabled(answers);
        // disabledは「無効」を示すHTMLの属性。disabled属性は、「フォーム要素」と呼ばれるHTML要素に対して指定できます。

        // 正解ならtrue, 不正解ならfalseをcheckCorrectに格納
        const isCorrect = CORRECT_ANSWERS[selectedQuiz].index === selectedAnswer;

        // 回答欄にテキストやclass名を付与
        answerText.innerText = CORRECT_ANSWERS[selectedQuiz].value;
        setTitle(answerTitle, isCorrect);
        setClassName(answerBox, isCorrect);

        // Aを非表示　displayプロパティ
        // 要素を取得
        let  answerA =document.getElementById("p-quiz-box__answer__correct__content__label");
        // noneに設定して非表示
        answerA.style.display ="block";
        // HTMLとjavascriptをidで紐付け

        // Aを非表示　displayプロパティ
        // 要素を取得
        let  answerA2 =document.getElementById("p-quiz-box__answer__correct__content__label2");
        // noneに設定して非表示
        answerA2.style.display ="block";

        // Aを非表示　displayプロパティ
        // 要素を取得
        let  answerA3 =document.getElementById("p-quiz-box__answer__correct__content__label3");
        // noneに設定して非表示
        answerA3.style.display ="block";

        // Aを非表示　displayプロパティ
        // 要素を取得
        let  answerA4 =document.getElementById("p-quiz-box__answer__correct__content__label4");
        // noneに設定して非表示
        answerA4.style.display ="block";

        // Aを非表示　displayプロパティ
        // 要素を取得
        let  answerA5 =document.getElementById("p-quiz-box__answer__correct__content__label5");
        // noneに設定して非表示
        answerA5.style.display ="block";

        // Aを非表示　displayプロパティ
        // 要素を取得
        let  answerA6 =document.getElementById("p-quiz-box__answer__correct__content__label6");
        // noneに設定して非表示
        answerA6.style.display ="block";
      })
    })
  })
}