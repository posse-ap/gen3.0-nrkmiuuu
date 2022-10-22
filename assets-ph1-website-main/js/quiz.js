'use strict';
//  厳格モード コード内に存在する潜在的な問題を早期に発見しやすい

{
  // 回答一覧
  const CORRECT_ANSWERS = [
    // constとは値書き換えを禁止した変数を宣言する方法
    // const x=3 3をxに代入する
    // constは1つの値しか代入できない たくさんあるのは読み込んでいるものが違う
    // それぞれにそれぞれの名前をつけなければならない
    // letはなんでも変えられる
    // const、letは変数を定義している
    // constx = 指示('.クラス名')（#id名）(属性)

    // 指示するやつ
    // getAttribute(属性（classとかidとかdataとか）)

    {
      index: 1,
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

  // index JavaScriptでその要素が、ある集合の中で何番目にあるかを知りたい

  // すべての問題を取得
  const allQuiz = document.querySelectorAll('.js-quiz');
  // 「document」は、documentオブジェクトと呼ばれ、Chrome等のブラウザ上で表示された
  // ドキュメントを操作する事ができる。
  // ここで言うオブジェクトとは、プログラミング言語で操作ができるデータを意味する

//   querySelector()は指定したセレクターの条件と一致したHTML要素のうち最初のひとつを返します。
// 返り値は配列ではなく単一のデータとして返されます。

// querySelectorAll()は指定したセレクターの条件と一致したHTML要素を全て返します。
// 返り値は配列として返されます

  // buttonタグにdisabledを付与
  const setDisabled = answers => {
    answers.forEach(answer => {
      answer.disabled = true;
    })
  }

//   ↓
//   const setdisabled1 = function (answers) {
// //
//   }

  // ()は引数が1つの場合は省略できる
  // => アロー関数 関数式をさらに簡易的に記述
  // 関数宣言はfunctuon文を用いて関数を宣言する方法
  // 関数式は変数に関数を値として代入し、後からその変数を呼び出すことで関数を間接的に利用する方法

  // trueかfalseで出力する文字列を出し分ける
      // forはループ処理の基本となるコード 
      // 回数が決まっている→for 
      // 配列をメインに扱う→forEach 
      // 配列とは複数のデータをひとまとめにする型
      // forEach メソッドを使うと配列に含まれる要素を順に取り出しコールバック関数へ渡して処理を行う

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

        setDisabled(answers);
        // disabledは「無効」を示すHTMLの属性。
        // disabled属性は、「フォーム要素」と呼ばれるHTML要素に対して指定できます。

        // 正解ならtrue, 不正解ならfalseをcheckCorrectに格納
        const isCorrect = CORRECT_ANSWERS[selectedQuiz].index === selectedAnswer;

        // 回答欄にテキストやclass名を付与
        answerText.innerText = CORRECT_ANSWERS[selectedQuiz].value;
        setTitle(answerTitle, isCorrect);
        setClassName(answerBox, isCorrect);

        // Aを非表示　displayプロパティ
        // 要素を取得
        let answerA = document.getElementById("p-quiz-box__answer__correct__content__label");
        // noneに設定して非表示
        answerA.style.display = "block";
        // HTMLとjavascriptをidで紐付け

        // Aを非表示　displayプロパティ
        // 要素を取得
        let answerA2 = document.getElementById("p-quiz-box__answer__correct__content__label2");
        // noneに設定して非表示
        answerA2.style.display = "block";

        // Aを非表示　displayプロパティ
        // 要素を取得
        let answerA3 = document.getElementById("p-quiz-box__answer__correct__content__label3");
        // noneに設定して非表示
        answerA3.style.display = "block";

        // Aを非表示　displayプロパティ
        // 要素を取得
        let answerA4 = document.getElementById("p-quiz-box__answer__correct__content__label4");
        // noneに設定して非表示
        answerA4.style.display = "block";

        // Aを非表示　displayプロパティ
        // 要素を取得
        let answerA5 = document.getElementById("p-quiz-box__answer__correct__content__label5");
        // noneに設定して非表示
        answerA5.style.display = "block";

        // Aを非表示　displayプロパティ
        // 要素を取得
        let answerA6 = document.getElementById("p-quiz-box__answer__correct__content__label6");
        // noneに設定して非表示
        answerA6.style.display = "block";
      })
    })
  })
}

// クリックしたら表示
// classlist htmlにclassを足す addで足す
// display blockで表示

// クリックしたらもう一度おせない
// pointer-events: none



// N予備校

// 引数　Paramu
// 文字列を扱う　storing
// 文字を数字化する　charcode
// function assessment
// ＝　代入
// iは文字の繰り返す回数
// 1文字なら1回forの処理をする
// ++は１を加算していく
// answers.length
// %は余り
// returnを使うことで後から来た情報がきたらもとからあるところに戻せる

// replaceall username というものを太郎に変える
// value htmlでいうclass(定義する役割) htmlと違うのはすでに変化するものがくる
// ==数値と文字列を比較 ===文字列と文字列、数値と数値
// documentはhtml




