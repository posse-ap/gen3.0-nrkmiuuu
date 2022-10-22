'use strict';

{
    // 回答一覧
    const CORRECT_ANSWERS = [
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

    //すべての問題を取得
    const allQuiz = document.querySelectorAll('.js-quiz');

    //buttonタグにdisabledを付与
    const setDisabled = answers => {
        answers.forEach(answer => {
            answer.disabled = true;
        })
    }

    //trueかfalseで出力する文字列を出し分ける
    const setTitle = (target, isCorrect) => {
        target.innerText = isCorrect ? '正解' : '不正解...';
    }
    const setClassName = (target, isCorrect) => {
        target.classList.add(isCorrect ? 'is-correct' : 'is-incorrect');
    }

    //各問題の中での処理
    allQuiz.forEach(quiz => {
        const answers = quiz.querySelectorAll('.js-answer');
        const selectedQuiz = Number(quiz.getAttribute('date-quiz'));
        const answerBox = quiz.querySelector('.js-answerBox');
        const answerTitle = quiz.querySelector('.js-answerTitle');
        const answerText = quiz.querySelector('js-answerText');

        answers.forEach(answer => {
            answer.addEventListener('click', () => {
                answer.classList.add('is-selected');
                const selectedAnswer = Number(answer, getAttribute('date-answer'));

                //すべてのボタンを非活用化
                setDisabled(answers);

                //正解ならtrue,不正解ならfalseをcheckCorrectに格納
                const isCorrect = CORRECT_ANSWERS[selectedQuiz].index === selectedAnswer;

                //回答欄にテキストやclass名を付与
                answerText.innerText = CORRECT_ANSWERS[selectedQuiz].value;
                setTitle(answerTitle, isCorrect);
                setClassName(answerBox, isCorrect);
            })
        })
    })
}

    // @typedef quiz
    // @property {numbeer} correctNumber
    // @property{string | undefined} note ノート
    // @property{string} question 問題文
    // @property{string[]} answers 回答の配列 

    // @description 問題と回答の定数
    // @type {QUIZ[]}

    const ALL_QUIZ = [
        {
            question: '日本のIT人材が2030年には最大どれくらい不足すると言われているでしょうか？',
            answer: ['約28万人', '約79万人', '約183万人'],
            correctNumber: 1,
            note: '経済産業省   2019年3月   -IT 人材需給に関する調査'
        },
        {
            question: '既存業界のビジネスと、先進的なテクノロジーを結びつけて生まれた、新しいビジネスのことをなんと言うでしょう？',
            answers: ['INTECH', 'BIZZTECH', 'X-TECH'],
            correctNumber: 2,
        },
        {
            question: 'IoTとは何の略でしょう？',
            answers: ['Internet of Things', 'Integrate into Technology', 'Information on Tool'],
            correctNumber: 0,
        },
        {
            question: 'イギリスのコンピューター科学者であるギャビン・ウッド氏が提唱した、ブロックチェーン技術を活用した「次世代分散型インターネット」のことをなんと言うでしょう？',
            answers: ['Society 5.0', 'CyPhy', 'SDGs'],
            correctNumber: 0,
            note: 'Society5.0 - 科学技術政策 - 内閣府'
        },
        {
            question: 'イギリスのコンピューター科学者であるギャビン・ウッド氏が提唱した、ブロックチェーン技術を活用した「次世代分散型インターネット」のことをなんと言うでしょう？',
            answers: ['Web3.0', 'NFT', 'メタバース'],
            correctNumber: 0,
        },
        {
            question: '先進テクノロジー活用企業と出遅れた企業の収益性の差はどれくらいあると言われているでしょうか？',
            answers: ['約2倍', '約5倍', '約11倍'],
            correctNumber: 1,
            note: 'Accenture Technology Vision 2021'
        }
    ];

    // @description クイズコンテナーの取得
    // @type {HTMLElement}

    const quizContainer = document.getElementById('js-quizContainer');

    //@description  クイズ1つ1つのHTMLを生成するための関数
    //@param quizItem {Quiz}
    //@param questionNumber {number}
    //@returns {string}

    const createQuizHtml = (quizItem, questionNumber) => {

        //@description 回答の生成
        //@type {string}

        const answersHtml = quizItem.answers.map((answer, answerIndex) => `<li class="p-quiz-box__answer__item">
        <button class="p-quiz-box__answer__button js-answer" data-answer="${answerIndex}">
          ${answer}<i class="u-icon__arrow"></i>
        </button>
      </li>`
    ).join('');

    //引用テキストの生成
    const noteHTML = quizItem.note ? `<cite class="p-quiz-box__note">
    <i class="u-icon__note"></i>${quizItem.note}
  </cite>` : '';

  //ここでreturnを使っているのはシャッフルするため？
  return `<section class="p-quiz-box js-quiz" data-quiz="${questionNumber}">
  <div class="p-quiz-box__question">
    <h2 class="p-quiz-box__question__title">
      <span class="p-quiz-box__label">Q${questionNumber + 1}</span>
      <span
        class="p-quiz-box__question__title__text">${quizItem.question}</span>
    </h2>
    <figure class="p-quiz-box__question__image">
      <img src="../assets/img/quiz/img-quiz0${questionNumber + 1}.png" alt="">
    </figure>
  </div>
  <div class="p-quiz-box__answer">
    <span class="p-quiz-box__label p-quiz-box__label--accent">A</span>
    <ul class="p-quiz-box__answer__list">
      ${answersHtml}
    </ul>
    <div class="p-quiz-box__answer__correct js-answerBox">
      <p class="p-quiz-box__answer__correct__title js-answerTitle"></p>
      <p class="p-quiz-box__answer__correct__content">
        <span class="p-quiz-box__answer__correct__content__label">A</span>
        <span class="js-answerText"></span>
      </p>
    </div>
  </div>
  ${noteHtml}
</section>`
}

//@type {string}
//@description すべての問題を取得

const allQuiz = document.querySelectorAll('.js-quiz');

//@description buttonタグにdisabledを付与
//@param answers {NodeListOf<Element>}

const setDisabled = answers => {
    answers.forEach(answer => {
      answer.disabled = true;
              //↑はどこのことをいっているのか
    })

    //@description trueかfalseで出力する文字列を出し分ける
    //@param target {Element}
    //@param isCorrect {boolean}

    const setTitle =(target, isCorrect) => {
        target.innerText = isCorrect ? '正解!' :'不正解...';
    }

    //各問題の中での処理
    allQuiz.forEach(quiz => {
        const answer = quiz.querySelectorAll('.js-answer');
        const selectedQuiz =Number(quiz.getAttribute('date-quiz'));
        const answerBox = quiz.querySelector('js-answer-box');
        const answerTitle = quiz.querySelector('.js-answertitle');
        const answerText = quiz.querySelector('.js-answerText');

        answers.forEach(answer => {
            amswer.addEventListener('click', () => {
                answer.classList.add('is-selected');
                const selectedAnswerNumber = Number(answer.getAttribute('date-answer'));

                //すべてのボタンを非表示
                setDisabled(answers);

                //正解ならtrue, 不正解ならfalseをcheckCorrectに格納
                const correctNumber = ALL_QUIZ[selectedQuiz].correctNumber
                const isCorrect = correctNumber === selectedAnswerNumber;

                // 回答欄にテキストやclass名を付与
                answerText.innerText = ALL_QUIZ[selectedQuiz].answers[correctNumber];
                setTitle(answerTitle,isCorrect);
                setClassName(answerBox.isCorrect);
                
            })
        })

    })

}


